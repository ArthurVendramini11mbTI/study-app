<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineEmits<{
  today: []
}>()
</script>

<template>
  <header class="d-flex align-center justify-space-between">
    <div>
      <span class="text-display-small">Study Calendar</span>
      <p class="text-medium-emphasis mt-1">Track your study rhythm and choose what you want to focus on.</p>
    </div>

    <v-btn class="dark-glass-item rounded-lg" @click="$emit('today')">
      <Icon icon="tabler:calendar-dot" width="19" height="19" class="me-2" />
      Today
    </v-btn>
  </header>
</template>
