<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue'

    const categories = {
        time: {
            studied: {
                hours: 2,
                minutes: 30
            },
            goal: {
                hours: 4,
                minutes: 0
            }
        },
        streak: {
            actualStreak: 14,
            bestStreak: 20
        },
        goals: {
            completedGoals: 12,
            totalGoals: 20
        },
        tasks: {
            tasksDue: 10
        }
    }

    const studyTimeProgress = computed(() => {
        return ((categories.time.studied.hours + (categories.time.studied.minutes / 60))/ categories.time.goal.hours) * 100
    })

    const goalsProgress = computed(() => {
        return (categories.goals.completedGoals / categories.goals.totalGoals) * 100
    })



  const values = ref([0, 2, 2, 3, 6, 3, 2])
</script>

<template>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <v-icon icon="mdi-clock-time-eight-outline" size="40" />

            <div class="d-flex flex-column ga-1">
                <span class="text-body-2">Study Time Today</span>
                <span class="text-h6 font-weight-bold">{{ categories.time.studied.hours }}h {{ categories.time.studied.minutes }}m</span>
                <span class="text-body-2 text-medium-emphasis">Goal: {{ categories.time.goal.hours }}h {{ categories.time.goal.minutes }}m</span>
            </div>

            <div>
                <v-progress-circular :size="64" :width="7" :model-value="studyTimeProgress">
                     <span class="text-caption">{{ studyTimeProgress }}%</span>
                </v-progress-circular>
            </div>
        </v-card>
    </v-col>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <v-icon icon="mdi-fire" size="40" />

            <div class="d-flex flex-column ga-1">
                <span class="text-body-2">Streak</span>
                <span class="text-h6 font-weight-bold">{{ categories.streak.actualStreak}} days</span>
                <span class="text-body-2 text-medium-emphasis">Best: {{ categories.streak.bestStreak }} days</span>
            </div>

            <div>

            </div>
        </v-card>
    </v-col>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <v-icon icon="mdi-check-circle-outline" size="40" />

            <div class="d-flex flex-column ga-1">
                <span class="text-body-2">Completed Goals</span>
                <span class="text-h6 font-weight-bold">{{ categories.goals.completedGoals }} / {{ categories.goals.totalGoals }}</span>
                <span class="text-body-2 text-medium-emphasis">This month</span>
            </div>

            <div>
                <v-progress-circular :size="64" :width="7" :model-value="goalsProgress" >
                     <span class="text-caption">{{ goalsProgress }}%</span>
                </v-progress-circular>
            </div>
        </v-card>
    </v-col>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <v-icon icon="mdi-content-paste" size="40" />

            <div class="d-flex flex-column ga-1">
                <span class="text-body-2">Taks Due</span>
                <span class="text-h6 font-weight-bold">{{ categories.tasks.tasksDue }}</span>
                <span class="text-body-2 text-medium-emphasis">Next 7 days</span>
            </div>

            <div class="d-flex align-center">
                <v-sparkline
                    :model-value="values"
                    color="blue"
                    :line-width="1"
                    :height="30"
                    :width="50"
                    interactive
                    tooltip
                />
            </div>
        </v-card>
    </v-col>

</template>
