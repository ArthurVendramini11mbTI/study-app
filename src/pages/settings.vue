<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue'
import { applyTheme, useActiveTheme } from '@/composables/theme'
import { updateCurrentUserTheme } from '@/services/auth'
import { updateThemePreference } from '@/services/userPreferences'
import { palettes, themeNames, type ThemeName } from '@/themes/palettes'

const activeTheme = useActiveTheme()
const savingTheme = ref<ThemeName | null>(null)
const errorMessage = ref('')

async function selectTheme(theme: ThemeName) {
  if (theme === activeTheme.value || savingTheme.value) {
    return
  }

  const previousTheme = activeTheme.value
  savingTheme.value = theme
  errorMessage.value = ''
  applyTheme(theme)

  try {
    const result = await updateThemePreference(theme)
    updateCurrentUserTheme(result.theme)
  } catch (error) {
    applyTheme(previousTheme)
    errorMessage.value = error instanceof Error ? error.message : 'Unable to save theme'
  } finally {
    savingTheme.value = null
  }
}
</script>

<template>
  <v-main class="settings-page">
    <v-row class="pa-10 dashboard-bg" style="min-height: 100vh">
      <v-col cols="2">
        <div class="sidebar-sticky">
          <DashboardSideBar />
        </div>
      </v-col>

      <v-col cols="10" class="d-flex flex-column ga-6">
        <header>
          <span class="text-display-small text-title-token">Settings</span>
          <p class="text-subtitle-token mt-1">Personalize how Axis looks and feels.</p>
        </header>

        <v-card class="light-glass-card rounded-xl pa-6">
          <div class="d-flex align-center ga-3 mb-2">
            <div class="section-icon"><Icon icon="tabler:palette" width="26" height="26" /></div>
            <div>
              <h2 class="text-h5 text-title-token">Color palette</h2>
              <p class="text-subtitle-token">Choose a dark palette. Changes are saved automatically.</p>
            </div>
          </div>

          <v-alert v-if="errorMessage" type="error" variant="tonal" class="my-5">{{ errorMessage }}</v-alert>

          <div class="palette-grid mt-6">
            <button
              v-for="theme in themeNames"
              :key="theme"
              type="button"
              class="palette-card"
              :class="{ active: activeTheme === theme }"
              :disabled="Boolean(savingTheme)"
              @click="selectTheme(theme)"
            >
              <div class="d-flex align-center justify-space-between">
                <div>
                  <p class="text-h6 text-title-token">{{ palettes[theme].label }}</p>
                  <p class="text-caption text-subtitle-token mt-1">{{ palettes[theme].description }}</p>
                </div>
                <v-progress-circular v-if="savingTheme === theme" indeterminate size="22" width="2" />
                <Icon v-else-if="activeTheme === theme" icon="tabler:circle-check-filled" width="24" height="24" class="selected-icon" />
              </div>

              <div class="swatches mt-5">
                <span v-for="color in palettes[theme].swatches" :key="color" :style="{ backgroundColor: color }" />
              </div>

              <div class="palette-preview mt-4">
                <span :style="{ backgroundColor: palettes[theme].swatches[0] }">Primary</span>
                <span :style="{ backgroundColor: palettes[theme].swatches[2] }">Secondary</span>
              </div>
            </button>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>
.settings-page { height: 100vh; overflow-y: auto; }
.sidebar-sticky { position: sticky; top: 40px; height: calc(100vh - 80px); }
.section-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; color: rgb(var(--v-theme-primary)); background: rgba(var(--v-theme-primary), 0.14); }
.palette-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.palette-card { padding: 20px; border: 1px solid rgba(var(--v-theme-border), 0.35); border-radius: 18px; color: rgb(var(--v-theme-text)); text-align: left; background: rgba(var(--v-theme-surface-strong), 0.42); cursor: pointer; transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease; }
.palette-card:hover:not(:disabled) { transform: translateY(-2px); border-color: rgba(var(--v-theme-primary), 0.65); }
.palette-card.active { border-color: rgb(var(--v-theme-primary)); background: rgba(var(--v-theme-primary), 0.11); box-shadow: 0 0 0 1px rgba(var(--v-theme-primary), 0.18); }
.palette-card:disabled { cursor: wait; opacity: 0.72; }
.selected-icon { color: rgb(var(--v-theme-primary)); }
.swatches { display: grid; grid-template-columns: 1.4fr 1fr 0.8fr; height: 42px; overflow: hidden; border-radius: 12px; border: 1px solid rgba(var(--v-theme-border), 0.3); }
.palette-preview { display: flex; gap: 8px; }
.palette-preview span { flex: 1; padding: 8px 10px; border-radius: 9px; color: #FFFFFF; font-size: 0.72rem; text-align: center; }
@media (max-width: 1000px) { .palette-grid { grid-template-columns: 1fr; } }
</style>
