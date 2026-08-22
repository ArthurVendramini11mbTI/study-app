<script setup lang="ts">
import dashboardCalendar from '@/components/dashboard/dashboardCalendar.vue';
import CreateGoal from '@/components/dashboard/dashboardGoals/createGoal.vue';
import DashboardGoals from '@/components/dashboard/dashboardGoals/dashboardGoals.vue';
import DashBoardHistoric from '@/components/dashboard/dashBoardHistoric.vue';
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue';
import DashboardUpperBar from '@/components/dashboard/dashboardUpperBar.vue';
import DashBoradStatus from '@/components/dashboard/dashBoradStatus.vue';

</script>

<template>
    <v-row class=" pa-10 overflow-hidden dashboard-bg" style="height: 100vh;">

            <v-col cols="2">
                <DashboardSideBar />    
            </v-col>

            <v-col cols="10" >
                <v-row>
                    <DashboardUpperBar />
                </v-row>

                <v-row>
                    <v-col cols="6" >
                        <DashboardGoals />
                        <CreateGoal/>
                    </v-col>

                    <v-col cols="6">
                        <dashboardCalendar/>
                    </v-col>
                </v-row>

                <v-row>
                    <DashBoradStatus/>
                </v-row>


                <v-row >
                    <DashBoardHistoric/>
                </v-row>
            </v-col>
    </v-row>
</template>

