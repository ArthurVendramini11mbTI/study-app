<script setup lang="ts">
import DashboardCalendar from '@/components/dashboard/dashboardCalendar.vue';
import DashboardGoals from '@/components/dashboard/dashboardGoals.vue';
import DashboardSideBar from '@/components/dashboard/dashboardSideBar.vue';
import DashboardUpperBar from '@/components/dashboard/dashboardUpperBar.vue';

</script>

<template>
    <v-row no-gutters>

            <v-col cols="0">
                <DashboardSideBar />
            </v-col>

            <v-col cols="12" no-gutters>
                <v-row>
                    <DashboardUpperBar />
                </v-row>

                <v-row no-gutters>
                    <v-col cols="9">
                        <DashboardCalendar />
                    </v-col>

                    <v-col cols="3">
                        <DashboardGoals />
                    </v-col>
                </v-row>
            </v-col>
    </v-row>
</template>