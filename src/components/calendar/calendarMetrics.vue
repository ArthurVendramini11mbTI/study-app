<script setup lang="ts">
import { Icon } from '@iconify/vue'

const metrics = [
  { label: 'Study days', value: '9', detail: '+2 from last month', detailClass: 'text-success', icon: 'tabler:calendar-check' },
  { label: 'Focused time', value: '20h 30m', detail: 'Across 4 active goals', detailClass: 'text-medium-emphasis', icon: 'tabler:clock-hour-4' },
  { label: 'Current streak', value: '7 days', detail: 'Personal best: 14 days', detailClass: 'text-warning', icon: 'tabler:flame' },
]
</script>

<template>
  <v-row>
    <v-col v-for="metric in metrics" :key="metric.label" cols="4">
      <v-card class="metric-card light-glass-card rounded-xl pa-4 h-100">
        <div class="d-flex align-center justify-space-between">
          <div>
            <p class="text-medium-emphasis mb-2">{{ metric.label }}</p>
            <p class="text-h4 font-weight-bold">{{ metric.value }}</p>
            <span class="text-caption" :class="metric.detailClass">{{ metric.detail }}</span>
          </div>
          <div class="metric-icon"><Icon :icon="metric.icon" width="48" height="48" /></div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.metric-card { min-height: 126px; }

.metric-icon {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  color: rgb(var(--v-theme-primary));
  background: rgba(var(--v-theme-primary), 0.14);
}
</style>
