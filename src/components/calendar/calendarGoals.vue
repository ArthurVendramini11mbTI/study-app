<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { GoalsSchema } from '@/schemas/goalSchema'
import { getGoalsService, trackGoalTimeService } from '@/services/goalService'

type Goals = ReturnType<typeof GoalsSchema.parse>

const goals = ref<Goals>([])
const goalsLoading = ref(true)
const selectedGoalId = ref<number | null>(null)
const trackingLoading = ref(false)
const trackingError = ref('')
const now = ref(Date.now())
const availableGoals = computed(() => goals.value.filter((goal) => goal.status.key !== 'completed'))
const selectedGoal = computed(() => availableGoals.value.find((goal) => goal.id === selectedGoalId.value) ?? availableGoals.value[0])
const isSelectedGoalRunning = computed(() => Boolean(selectedGoal.value?.startedAt))
const isSelectedGoalComplete = computed(() => {
  if (!selectedGoal.value) {
    return false
  }

  return selectedGoal.value.accumulatedSeconds >= selectedGoal.value.targetSeconds
})
const sessionElapsedSeconds = computed(() => {
  if (!selectedGoal.value?.startedAt) {
    return 0
  }

  return Math.max(0, Math.floor((now.value - selectedGoal.value.startedAt.getTime()) / 1000))
})
const remainingSeconds = computed(() => {
  if (!selectedGoal.value) {
    return 0
  }

  return Math.max(
    0,
    selectedGoal.value.targetSeconds
      - selectedGoal.value.accumulatedSeconds
      - sessionElapsedSeconds.value
  )
})

let timerInterval: ReturnType<typeof setInterval> | undefined

async function loadGoals() {
  try {
    const goalsFromAPI = await getGoalsService()
    goals.value = GoalsSchema.parse(goalsFromAPI)

    if (!availableGoals.value.some((goal) => goal.id === selectedGoalId.value)) {
      selectedGoalId.value = availableGoals.value[0]?.id ?? null
    }
  } catch (error) {
    console.error('Unable to fetch goals:', error)
  } finally {
    goalsLoading.value = false
  }
}

function formatElapsedTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
}

function getLiveProgress(goal: Goals[number]) {
  const activeSessionSeconds = goal.startedAt
    ? Math.max(0, Math.floor((now.value - goal.startedAt.getTime()) / 1000))
    : 0
  const currentSeconds = goal.accumulatedSeconds + activeSessionSeconds

  return Math.min(
    100,
    Math.round((currentSeconds / goal.targetSeconds) * 100),
  )
}

async function toggleTimeTracking() {
  if (
    !selectedGoal.value
    || trackingLoading.value
    || (isSelectedGoalComplete.value && !isSelectedGoalRunning.value)
  ) {
    return
  }

  trackingLoading.value = true
  trackingError.value = ''

  try {
    const action = isSelectedGoalRunning.value ? 'stop' : 'start'
    await trackGoalTimeService(selectedGoal.value.id, action)
    await loadGoals()
    now.value = Date.now()
  } catch (error) {
    trackingError.value = error instanceof Error ? error.message : 'Unable to track goal time'
  } finally {
    trackingLoading.value = false
  }
}

watch(sessionElapsedSeconds, () => {
  if (
    isSelectedGoalRunning.value
    && remainingSeconds.value === 0
    && !trackingLoading.value
  ) {
    toggleTimeTracking()
  }
})

onMounted(() => {
  loadGoals()
  timerInterval = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>

<template>
  <v-card class="light-glass-card rounded-xl pa-5 h-100 goals-card">
    <div class="d-flex align-center justify-space-between mb-1">
      <h2 class="text-h6">Goals catalog</h2>
      <v-btn icon variant="text" size="small"><Icon icon="tabler:dots" width="20" height="20" /></v-btn>
    </div>
    <p class="text-body-2 text-medium-emphasis mb-4">Select a goal to start focusing.</p>

    <div v-if="goalsLoading" class="goals-list d-flex flex-column ga-2">
      <v-skeleton-loader v-for="item in 4" :key="item" type="list-item" class="goal-skeleton rounded-lg" />
    </div>

    <div v-else-if="availableGoals.length" class="goals-list d-flex flex-column ga-2">
      <button
        v-for="goal in availableGoals"
        :key="goal.id"
        type="button"
        class="goal-item"
        :class="{ selected: selectedGoalId === goal.id }"
        @click="selectedGoalId = goal.id"
      >
        <div class="goal-icon" :style="{ color: goal.color, backgroundColor: `${goal.color}18` }">
          <Icon :icon="goal.icon" width="28" height="28" />
        </div>
        <div class="flex-grow-1 overflow-hidden">
          <p class="goal-title text-body-2 text-truncate">{{ goal.title }}</p>
          <v-progress-linear :model-value="getLiveProgress(goal)" :color="goal.color" height="5" rounded />
        </div>
        <span class="goal-progress text-caption">{{ getLiveProgress(goal) }}%</span>
        <Icon v-if="goal.startedAt" icon="tabler:player-record-filled" width="18" height="18" class="active-session-icon" />
        <Icon v-else-if="selectedGoalId === goal.id" icon="tabler:circle-check-filled" width="22" height="22" :style="{ color: goal.color }" />
      </button>
    </div>

    <div v-else class="empty-goals">
      <div class="empty-goals-icon"><Icon icon="tabler:target-arrow" width="28" height="28" /></div>
      <p class="font-weight-medium mt-3">{{ goals.length ? 'All goals completed' : 'No goals yet' }}</p>
      <p class="text-caption text-medium-emphasis mt-1">
        {{ goals.length ? 'Create a new goal to keep focusing.' : 'Create a goal to start tracking your focus time.' }}
      </p>
      <v-btn to="/goals" variant="text" color="primary" class="mt-2">Create a goal</v-btn>
    </div>

    <v-divider v-if="availableGoals.length" class="my-5" />

    <div v-if="selectedGoal" class="timer-panel">
      <div class="d-flex align-center ga-3 mb-4">
        <div class="timer-goal-icon" :style="{ color: selectedGoal.color, backgroundColor: `${selectedGoal.color}18` }">
          <Icon :icon="selectedGoal.icon" width="24" height="24" />
        </div>
        <div class="overflow-hidden">
          <p class="text-caption text-medium-emphasis">Ready to focus on</p>
          <p class="font-weight-medium text-truncate">{{ selectedGoal.title }}</p>
        </div>
      </div>

      <p class="timer-value">{{ formatElapsedTime(sessionElapsedSeconds) }}</p>
      <p class="text-caption text-medium-emphasis text-center mb-4">
        <template v-if="isSelectedGoalComplete">Goal completed</template>
        <template v-else>{{ formatElapsedTime(remainingSeconds) }} remaining</template>
      </p>

      <v-alert v-if="trackingError" type="error" variant="tonal" density="compact" class="mb-3">
        {{ trackingError }}
      </v-alert>

      <v-btn
        class="btn btn-primary rounded-lg w-100"
        :class="{ 'stop-btn': isSelectedGoalRunning }"
        size="large"
        :loading="trackingLoading"
        :disabled="isSelectedGoalComplete && !isSelectedGoalRunning"
        @click="toggleTimeTracking"
      >
        <Icon :icon="isSelectedGoalRunning ? 'tabler:player-stop-filled' : 'tabler:player-play-filled'" width="19" height="19" class="me-2" />
        {{ isSelectedGoalRunning ? 'Stop focus' : isSelectedGoalComplete ? 'Goal completed' : 'Start focus' }}
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.goals-card { min-height: 585px; }
.goals-list { max-height: 330px; overflow-y: auto; scrollbar-width: thin; }
.goal-skeleton { height: 56px; background: rgba(var(--v-theme-surface-strong), 0.42); }
.empty-goals { min-height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
.empty-goals-icon { width: 54px; height: 54px; display: grid; place-items: center; border-radius: 16px; color: rgb(var(--v-theme-primary)); background: rgba(var(--v-theme-primary), 0.12); }

.goal-item {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 12px;
  border: 1px solid rgba(var(--v-theme-border), 0.22);
  border-radius: 14px;
  color: inherit;
  text-align: left;
  background: rgba(var(--v-theme-surface-strong), 0.42);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.goal-item:hover { transform: translateY(-1px); background: rgba(var(--v-theme-surface), 0.68); }
.goal-item.selected { border-color: rgba(var(--v-theme-primary), 0.5); background: rgba(var(--v-theme-primary), 0.1); }
.goal-icon, .timer-goal-icon { flex: 0 0 auto; display: grid; place-items: center; border-radius: 12px; }
.goal-icon { width: 40px; height: 40px; }
.timer-goal-icon { width: 46px; height: 46px; }
.goal-title { margin-bottom: 5px; line-height: 1; }
.goal-progress { min-width: 34px; text-align: right; font-variant-numeric: tabular-nums; }
.active-session-icon { color: rgb(var(--v-theme-success)); }

.timer-panel {
  padding: 16px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.11), rgba(var(--v-theme-surface), 0.34));
}

.timer-value {
  margin-bottom: 4px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
}

.stop-btn { background: rgb(var(--v-theme-error)) !important; }
</style>
