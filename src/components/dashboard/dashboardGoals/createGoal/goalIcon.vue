<script setup lang="ts">
import { selectIconCard } from '@/composables/goal'
import {selectedIcon ,selectedColor} from '@/composables/goal'
import { Icon } from '@iconify/vue'

const icons = [
  'tabler:book',
  'tabler:school',
  'tabler:code',
  'tabler:device-laptop',
  'tabler:calculator',
  'tabler:flask',
  'tabler:database',
  'tabler:brain',
  'tabler:pencil',
  'tabler:bulb',
  'tabler:target',
  'tabler:atom',
  'tabler:math-function',
  'tabler:terminal-2',
  'tabler:file-code',
  'tabler:notebook',
  'tabler:bookmark',
  'tabler:trophy',
  'tabler:rocket',
]
function selectIcon(icon: string) {
  selectedIcon.value = icon
}

function confirmSelection() {
  selectIconCard.value = false
}
</script>

<template>
  <v-dialog v-model="selectIconCard" max-width="420">
    <v-card class="dark-glass-card pa-4 rounded-xl">

      <div class="d-flex justify-space-between align-center mb-3">
        <v-card-title>Select an Icon</v-card-title>
        <v-btn icon variant="text" size="small" @click="selectIconCard = false"><Icon icon="tabler:x" width="20" height="20" /></v-btn>
      </div>

      <div class="icon-grid">
        <v-btn v-for="icon in icons" :key="icon" icon variant="text" class="icon-option" :class="{ 'icon-selected': selectedIcon === icon }" @click="selectIcon(icon)">
          <Icon :icon="icon" :style="selectedIcon === icon ? { color: selectedColor } : undefined" width="26" height="26" />
        </v-btn>
      </div>

      <div class="d-flex align-center justify-space-between mt-5">
        <span class="text-body-2">Color</span>

        <v-menu location="bottom end" :close-on-content-click="false">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" class="ga-2">
              <div class="color-preview" :style="{ backgroundColor: selectedColor }"/>
              {{ selectedColor }}
              <Icon icon="tabler:chevron-down" width="18" height="18" />
            </v-btn>
          </template>

          <v-color-picker v-model="selectedColor" hide-inputs class="dark-glass-card"/>
        </v-menu>
      </div>

      <div class="preview mt-4">
        <Icon :icon="selectedIcon" :style="{ color: selectedColor }" width="36" height="36" />
        <span class="text-body-2">Preview</span>
      </div>

      <div class="d-flex justify-end ga-2 mt-5">
        <v-btn variant="text" @click="selectIconCard = false">Cancel</v-btn>
        <v-btn class="btn" @click="confirmSelection"><Icon icon="tabler:check" width="18" height="18" class="me-2" />Select</v-btn>
      </div>

    </v-card>
  </v-dialog>
</template>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
}

.icon-option {
  border-radius: 12px;
  border: 1px solid transparent;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.icon-option:hover {
  transform: translateY(-2px);

  background: rgba(var(--v-theme-primary), 0.12);

  border-color: rgba(var(--v-theme-primary), 0.25);
}

.icon-selected {
  background: rgba(var(--v-theme-primary), 0.18) !important;

  border-color: rgba(var(--v-theme-primary), 0.55);

  box-shadow:
    0 0 14px rgba(var(--v-theme-primary), 0.2);
}

.color-preview {
  width: 16px;
  height: 16px;

  border-radius: 50%;

  border: 1px solid rgba(255, 255, 255, 0.3);
}

.preview {
  min-height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
