<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

    const categories = {
        time: {
            studied: {
                hours: 2,
                minutes: 30
            },
            goal: {
                hours: 4,
                minutes: 50
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
        return Math.round(((categories.time.studied.hours + (categories.time.studied.minutes / 60)) / (categories.time.goal.hours + categories.time.goal.minutes / 60)) * 100)
    })

    const goalsProgress = computed(() => {
        return Math.round((categories.goals.completedGoals / categories.goals.totalGoals) * 100)
    })



  const values = ref([0, 2, 2, 3, 6, 3, 2])
</script>

<template>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card h-100 rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <Icon icon="tabler:clock-hour-8" width="50" height="50" />

            <div class="d-flex flex-column ga-1">
                <span class="">Study Time Today</span>
                <span class="font-weight-bold text-headline-small">{{ categories.time.studied.hours }}h {{ categories.time.studied.minutes }}m</span>
                <span class=" ">Goal: {{ categories.time.goal.hours }}h {{ categories.time.goal.minutes }}m</span>
            </div>

            <div>
                <v-progress-circular :size="64" :width="7" :model-value="studyTimeProgress">
                     <span class="text-caption">{{ studyTimeProgress }}%</span>
                </v-progress-circular>
            </div>
        </v-card>
    </v-col>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card h-100 rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <Icon icon="tabler:flame" width="50" height="50" />

            <div class="d-flex flex-column ga-1">
                <span class="">Streak</span>
                <span class="font-weight-bold text-headline-small">{{ categories.streak.actualStreak}} days</span>
                <span class=" ">Best: {{ categories.streak.bestStreak }} days</span>
            </div>

            <div>

            </div>
        </v-card>
    </v-col>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card h-100 rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <Icon icon="tabler:circle-check" width="50" height="50" />

            <div class="d-flex flex-column ga-1">
                <span class="">Completed Goals</span>
                <span class="font-weight-bold text-headline-small ">{{ categories.goals.completedGoals }} / {{ categories.goals.totalGoals }}</span>
                <span class=" ">This month</span>
            </div>

            <div>
                <v-progress-circular :size="64" :width="7" :model-value="goalsProgress" >
                     <span class="text-caption">{{ goalsProgress }}%</span>
                </v-progress-circular>
            </div>
        </v-card>
    </v-col>
    <v-col cols="3" class="pa-2">
        <v-card class="light-glass-card h-100 rounded-xl d-flex align-center justify-space-between pa-4" min-height="120">
            <Icon icon="tabler:clipboard" width="50" height="50" />

            <div class="d-flex flex-column ga-1">
                <span class="">Taks Due</span>
                <span class="font-weight-bold text-headline-small ">{{ categories.tasks.tasksDue }}</span>
                <span class=" ">Next 7 days</span>
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
