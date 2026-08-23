<script setup lang="ts">
import { selectIconCard } from '@/composables/goal'
import {selectedIcon ,selectedColor} from '@/composables/goal'

const icons = [
  'mdi-book-outline',
  'mdi-school-outline',
  'mdi-code-tags',
  'mdi-laptop',
  'mdi-calculator',
  'mdi-flask-outline',
  'mdi-database-outline',
  'mdi-brain',
  'mdi-pencil-outline',
  'mdi-lightbulb-outline',
  'mdi-target',
  'mdi-language-javascript',
  'mdi-language-typescript',
  'mdi-language-html5',
  'mdi-language-css3',
  'mdi-language-csharp',
  'mdi-language-c',
  'mdi-language-cpp',
  'mdi-language-python',
  'mdi-language-java',
  'mdi-language-lua',
  'mdi-nodejs',
  'mdi-vuejs',
  'mdi-react',
  'mdi-angularjs',
]
function selectIcon(icon: string) {
  selectedIcon.value = icon
}

function confirmSelection() {
  console.log({
    icon: selectedIcon.value,
    color: selectedColor.value,
  })

  selectIconCard.value = false
}
</script>

<template>
  <v-dialog v-model="selectIconCard" max-width="420">
    <v-card class="dark-glass-card pa-4 rounded-xl">

      <div class="d-flex justify-space-between align-center mb-3">
        <v-card-title>Select an Icon</v-card-title>
        <v-btn icon="mdi-close" variant="text" size="small" @click="selectIconCard = false"/>
      </div>

      <div class="icon-grid">
        <v-btn v-for="icon in icons" :key="icon" icon variant="text" class="icon-option" :class="{ 'icon-selected': selectedIcon === icon }" @click="selectIcon(icon)">
          <v-icon :icon="icon" :color="selectedIcon === icon ? selectedColor : undefined" size="26"/>
        </v-btn>
      </div>

      <div class="d-flex align-center justify-space-between mt-5">
        <span class="text-body-2">Color</span>

        <v-menu location="bottom end" :close-on-content-click="false">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" class="ga-2">
              <div class="color-preview" :style="{ backgroundColor: selectedColor }"/>
              {{ selectedColor }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-color-picker v-model="selectedColor" hide-inputs class="dark-glass-card"/>
        </v-menu>
      </div>

      <div class="preview mt-4">
        <v-icon :icon="selectedIcon" :color="selectedColor" size="36"/>
        <span class="text-body-2">Preview</span>
      </div>

      <div class="d-flex justify-end ga-2 mt-5">
        <v-btn variant="text" @click="selectIconCard = false">Cancel</v-btn>
        <v-btn class="btn" prepend-icon="mdi-check" @click="confirmSelection">Select</v-btn>
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