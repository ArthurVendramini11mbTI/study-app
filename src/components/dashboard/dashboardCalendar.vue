<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

const value = ref([new Date()])

const calendar = ref()

const currentMonth = computed(() => {
  const date = value.value[0]

  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })
})

function previousMonth() {
  const date = new Date(value.value[0])

  date.setMonth(date.getMonth() - 1)

  value.value = [date]
}

function nextMonth() {
  const date = new Date(value.value[0])

  date.setMonth(date.getMonth() + 1)

  value.value = [date]
}
</script>

<template>
  <v-card class="light-glass-card rounded-xl pa-4 d-flex flex-column" style="height: 100%;" flat>

    <div class="d-flex align-center justify-space-between mb-2">

      <span class="text-subtitle-1 font-weight-medium">{{ currentMonth }}</span>

      <div class="d-flex ga-4">
        <v-btn variant="text" size="small" class="btn rounded-lg" @click="previousMonth">
          <Icon icon="tabler:chevron-left" width="20" height="20" />
        </v-btn>
        <v-btn variant="text" size="small" class="btn rounded-lg" @click="nextMonth">
          <Icon icon="tabler:chevron-right" width="20" height="20" />
        </v-btn>
      </div>

    </div>

    <v-calendar :v-model="value" ref="calendar" type="month" class="bg-transparent" style="height: 280px; flex: 0 0 280px"hide-header/>

    <div class="d-flex align-center justify-space-between mt-2">
      <div class="d-flex align-center ga-2">
        <Icon icon="tabler:circle-filled" width="7" height="7" style="color: rgb(var(--v-theme-primary));" />
        <span class="text-caption text-medium-emphasis">Study day</span>
      </div>

      <v-btn variant="text">View full calendar <Icon icon="tabler:chevron-right" width="18" height="18" class="ms-1" /></v-btn>
    </div>

  </v-card>
</template>

<style scoped>
:deep(.v-calendar-weekly__day.v-outside),
:deep(.v-calendar-weekly__day.v-outside .v-btn),
:deep(.v-calendar-weekly__day.v-outside .v-calendar-weekly__day-label) {
  background-color: transparent !important;
  color: inherit !important;
  opacity: 1 !important;
}

</style>
