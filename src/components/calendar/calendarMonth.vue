<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const displayedDate = ref(new Date())
const selectedDay = ref(new Date().getDate())

const monthTitle = computed(() => displayedDate.value.toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
}))

const calendarDays = computed(() => {
  const year = displayedDate.value.getFullYear()
  const month = displayedDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const mondayOffset = (firstDay.getDay() + 6) % 7
  const start = new Date(year, month, 1 - mondayOffset)

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start)
    date.setDate(start.getDate() + index)

    return {
      date,
      day: date.getDate(),
      currentMonth: date.getMonth() === month,
      isToday: date.toDateString() === new Date().toDateString(),
    }
  })
})

function changeMonth(offset: number) {
  displayedDate.value = new Date(
    displayedDate.value.getFullYear(),
    displayedDate.value.getMonth() + offset,
    1,
  )
  selectedDay.value = 1
}

function goToToday() {
  displayedDate.value = new Date()
  selectedDay.value = new Date().getDate()
}

function selectDate(date: Date, currentMonth: boolean) {
  if (!currentMonth) {
    displayedDate.value = new Date(date.getFullYear(), date.getMonth(), 1)
  }

  selectedDay.value = date.getDate()
}

defineExpose({ goToToday })
</script>

<template>
  <v-card class="light-glass-card rounded-xl pa-5 h-100">
    <div class="d-flex align-center mb-5">
      <v-btn icon variant="text" size="small" @click="changeMonth(-1)">
        <Icon icon="tabler:chevron-left" width="21" height="21" />
      </v-btn>
      <h2 class="text-h6 month-title">{{ monthTitle }}</h2>
      <v-btn icon variant="text" size="small" @click="changeMonth(1)">
        <Icon icon="tabler:chevron-right" width="21" height="21" />
      </v-btn>
    </div>

    <div class="calendar-grid calendar-header">
      <div v-for="day in weekDays" :key="day" class="weekday">{{ day }}</div>
    </div>

    <div class="calendar-grid">
      <button
        v-for="calendarDay in calendarDays"
        :key="calendarDay.date.toISOString()"
        class="day-cell"
        :class="{
          muted: !calendarDay.currentMonth,
          selected: calendarDay.currentMonth && calendarDay.day === selectedDay,
        }"
        type="button"
        @click="selectDate(calendarDay.date, calendarDay.currentMonth)"
      >
        <span class="day-number" :class="{ today: calendarDay.isToday }">{{ calendarDay.day }}</span>
      </button>
    </div>
  </v-card>
</template>

<style scoped>
.month-title { min-width: 170px; text-align: center; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); }
.calendar-header { border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
.weekday { padding: 10px 6px; text-align: center; font-size: 0.75rem; color: rgba(255, 255, 255, 0.55); }

.day-cell {
  position: relative;
  min-height: 74px;
  padding: 10px;
  border: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: inherit;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;
}

.day-cell:hover { background: rgba(255, 255, 255, 0.05); }
.day-cell.selected { background: rgba(var(--v-theme-primary), 0.13); box-shadow: inset 0 0 0 1px rgba(var(--v-theme-primary), 0.45); }
.day-cell.muted { opacity: 0.28; }
.day-number { display: inline-grid; width: 28px; height: 28px; place-items: center; border-radius: 50%; font-size: 0.82rem; }
.day-number.today { color: white; background: rgb(var(--v-theme-primary)); font-weight: 700; }

@media (max-width: 1100px) {
  .day-cell { min-height: 62px; padding: 7px; }
}
</style>
