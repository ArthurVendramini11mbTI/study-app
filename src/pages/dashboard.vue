<script setup lang="ts">
import dashboardCalendar from '@/components/dashboard/dashboardCalendar.vue';
import CreateGoal from '@/components/dashboard/dashboardGoals/createGoal.vue';
import DashboardGoals from '@/components/dashboard/dashboardGoals/dashboardGoals.vue';
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue';
import DashboardUpperBar from '@/components/dashboard/dashboardUpperBar.vue';

</script>

<template>

    <v-row class="backgroudDashboard pa-10">

            <v-col cols="2">
                <DashboardSideBar />
                        
            </v-col>

            <v-col cols="10" >
                <v-row>
                    <DashboardUpperBar />
                </v-row>

                <v-row>
                    <v-col cols="9">
                        <dashboardCalendar />
                    </v-col>

                    <v-col cols="3">
                        <DashboardGoals />
                        <CreateGoal/>
                    </v-col>
                </v-row>
            </v-col>
    </v-row>
</template>

<style scope>
    .backgroudDashboard{
        background-image: url('@/assets/dashboardBackground.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

</style>