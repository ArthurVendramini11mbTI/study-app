<script setup lang="ts">
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue'
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <v-main class="section-page">
    <v-row class="pa-10 dashboard-bg" style="min-height: 100vh">
      <v-col cols="2">
        <div class="sidebar-sticky">
          <DashboardSideBar />
        </div>
      </v-col>

      <v-col cols="10" class="d-flex flex-column ga-6">
        <div>
          <span class="text-display-small">{{ title }}</span>
          <p class="text-medium-emphasis mt-1">This workspace is ready for the next step.</p>
        </div>

        <v-card class="light-glass-card rounded-xl flex-grow-1 d-flex align-center justify-center pa-10">
          <div class="text-center">
            <div class="section-icon mx-auto mb-5">
              <Icon :icon="icon" width="42" height="42" />
            </div>
            <h2 class="text-h5 mb-2">{{ title }} is coming next</h2>
            <p class="text-medium-emphasis">The navigation is already connected. This section will be built soon.</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>
.section-page {
  height: 100vh;
  overflow-y: auto;
}

.sidebar-sticky {
  position: sticky;
  top: 40px;
  height: calc(100vh - 80px);
}

.section-icon {
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  color: rgb(var(--v-theme-primary));
  background: rgba(var(--v-theme-primary), 0.14);
  border: 1px solid rgba(var(--v-theme-primary), 0.28);
}
</style>
