<script setup lang="ts">
import { computed } from 'vue';

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

      import { ref } from 'vue'

  const values = ref([0, 2, 2, 3, 6, 3, 2])
</script>

<template >
    <v-col cols="3">
        <v-card class="light-glass-card rounded-xl d-flex pa-4 justify-space-around align-center">

            <div class="dark-glass-card rounded-lg pa-2 purple-card" style="height: fit-content; width: fit-content;">
                    <v-icon icon="mdi-clock-time-eight-outline" size="45" ></v-icon>
            </div>

            <div class="d-flex flex-column ga-2">
                <span>Study Time Today</span>
                <span class="text-display-small">{{ categories.time.studied.hours }}h {{ categories.time.studied.minutes }}m</span>
                <span>Goal: {{ categories.time.goal.hours }}h {{ categories.time.goal.minutes }}m</span>
            </div>

            <div>
                <v-progress-circular :size="75" :width="8"  :model-value="studyTimeProgress" color="rgba(124, 58, 237, 0.28)">
                     <v-avatar color="transparent" size="70"><span style="color: white;">{{ studyTimeProgress }} %</span></v-avatar>
                </v-progress-circular>
            </div>
        </v-card>
    </v-col>
    <v-col cols="3">
        <v-card class="light-glass-card rounded-xl d-flex pa-4 justify-space-around align-center">

            <div class="dark-glass-card rounded-lg pa-2 orange-card" style="height: fit-content; width: fit-content;">
                    <v-icon icon="mdi-fire" size="45"  ></v-icon>
            </div>

            <div class="d-flex flex-column ga-2">
                <span>Streak</span>
                <span class="text-display-small">{{ categories.streak.actualStreak}} days</span>
                <span>Best: {{ categories.streak.bestStreak }} days</span>
            </div>

            <div>

            </div>
        </v-card>
    </v-col>
    <v-col cols="3">
        <v-card class="light-glass-card rounded-xl d-flex pa-4 justify-space-around align-center">

            <div class="dark-glass-card rounded-lg pa-2 green-card" style="height: fit-content; width: fit-content;">
                    <v-icon icon="mdi-check-circle-outline" size="45" ></v-icon>
            </div>

            <div class="d-flex flex-column ga-2">
                <span>Completed Goals</span>
                <span class="text-display-small">{{ categories.goals.completedGoals }} / {{ categories.goals.totalGoals }}</span>
                <span>This month</span>
            </div>

            <div>
                <v-progress-circular :size="75" :width="8"  :model-value="goalsProgress" color="rgba(34, 197, 94, 0.26)">
                     <v-avatar color="transparent" size="70"><span style="color: white;">{{ goalsProgress }} %</span></v-avatar>
                </v-progress-circular>
            </div>
        </v-card>
    </v-col>
    <v-col cols="3">
        <v-card class="light-glass-card rounded-xl d-flex pa-4 justify-space-around align-center">

            <div class="dark-glass-card rounded-lg pa-2 blue-card" style="height: fit-content; width: fit-content;">
                    <v-icon icon="mdi-content-paste" size="45"></v-icon>
            </div>

            <div class="d-flex flex-column ga-2">
                <span>Taks Due</span>
                <span class="text-display-small">{{ categories.tasks.tasksDue }}</span>
                <span>Next 7 days</span>
            </div>

            <div class="sparkline-container">
                <v-sparkline
                    :model-value="values"
                    color="blue"
                    :line-width="2"
                    :height="60"
                    :width="120"
                    interactive
                    tooltip
                />
            </div>
        </v-card>
    </v-col>

</template>

<style scoped>
.sparkline-container {
  width: 100px;
  height: 60px;
}

.purple-card {
  background: rgba(124, 58, 237, 0.28) !important;
}

.blue-card {
  background: rgba(37, 99, 235, 0.28) !important;
}

.green-card {
  background: rgba(34, 197, 94, 0.26) !important;
}

.orange-card {
  background: rgba(249, 115, 22, 0.28) !important;
}
</style>