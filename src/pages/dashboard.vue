<script setup lang="ts">
import dashboardCalendar from '@/components/dashboard/dashboardCalendar.vue';
import CreateGoal from '@/components/dashboard/dashboardGoals/createGoal/createGoal.vue';
import DashboardGoals from '@/components/dashboard/dashboardGoals/dashboardGoals.vue';
import DashBoardHistoric from '@/components/dashboard/dashBoardHistoric.vue';
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue';
import DashboardUpperBar from '@/components/dashboard/dashboardUpperBar.vue';
import DashBoradStatus from '@/components/dashboard/dashBoradStatus.vue';
import goalIcon from '@/components/dashboard/dashboardGoals/createGoal/goalIcon.vue';

</script>

<template>
    <v-row class="pa-10 dashboard-bg" style="min-height: 100vh;">

            <v-col cols="2">
                <div class="sidebar-sticky">
                    <DashboardSideBar />
                </div>
            </v-col>

            <v-col cols="10" >
                <v-row>
                    <DashboardUpperBar />
                </v-row>

                <v-row>
                    <v-col cols="6" >
                        <DashboardGoals />
                        <CreateGoal/>
                        <goalIcon/>
                    </v-col>

                    <v-col cols="6">
                        <dashboardCalendar/>
                    </v-col>
                </v-row>

                <v-row >
                    <DashBoradStatus />
                </v-row>


                <v-row >
                    <DashBoardHistoric/>
                </v-row>
            </v-col>
    </v-row>
</template>

<style scoped>
.sidebar-sticky {
  position: sticky;
  top: 40px;
  height: calc(100vh - 80px);
}
</style>
