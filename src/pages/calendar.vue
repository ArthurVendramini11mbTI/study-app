<script setup lang="ts">
import { ref } from 'vue'
import CalendarGoals from '@/components/calendar/calendarGoals.vue'
import CalendarHeader from '@/components/calendar/calendarHeader.vue'
import CalendarMonth from '@/components/calendar/calendarMonth.vue'
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue'

const calendarMonth = ref<InstanceType<typeof CalendarMonth>>()

function goToToday() {
  calendarMonth.value?.goToToday()
}
</script>

<template>
  <v-main class="calendar-page">
    <v-row class="pa-10 dashboard-bg" style="min-height: 100vh">
      <v-col cols="2">
        <div class="sidebar-sticky">
          <DashboardSideBar />
        </div>
      </v-col>

      <v-col cols="10" class="d-flex flex-column ga-5">
        <CalendarHeader @today="goToToday" />

        <v-row class="flex-grow-1">
          <v-col cols="8">
            <CalendarMonth ref="calendarMonth" />
          </v-col>
          <v-col cols="4">
            <CalendarGoals />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-main>
</template>

<style scoped>
.calendar-page {
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
}

.calendar-page::-webkit-scrollbar { display: none; }

.sidebar-sticky {
  position: sticky;
  top: 40px;
  height: calc(100vh - 80px);
}
</style>
