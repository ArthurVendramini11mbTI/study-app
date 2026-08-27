<script setup lang="ts">
    import { GoalsSchema } from '@/types/goals';
    
        const recentGoals = GoalsSchema.parse([
            {
            title: 'Estudar Node',
            description: 'Express',
            icon: '$vuetify',
            color: 'blue',
            progress: 50,
            StudyingTime: {
                hours: 2,
                minutes: 40
            },
            when:{
                day: 'today',
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
            }
        ])
</script>

<template>
    <v-card text="" title="" class="w-100 light-glass-card rounded-xl pa-2">
        <template v-slot:title>Recent Study Sessions</template>

        <template v-slot:append>
        <v-btn
            class="text-none"
            text="View all sessions >"
            variant="text"
            slim
        ></v-btn>
        </template>

        <div class="d-flex flex-column ga-2">
            <v-card  class="mx-auto w-100  inner-card card rounded-lg d-flex justify-space-between align-center pr-5 pl-5"   v-for="goal in recentGoals">
            <div>
                <v-icon :icon="goal.icon" :color="goal.color"></v-icon>
            </div>

            <div class="d-flex flex-column justify-center ps-5"  style="width: 60%">
                <p class="ma-1">{{goal.title}}</p>

                <v-progress-linear
                :model-value="goal.progress"
                height="8"
                rounded
                :color="goal.color"
                style="width: 95%"
                />
            </div>

            <div class="d-flex align-center ga-2" style="width: 30%;">
                <p>{{ goal.progress }}%</p>
                <v-chip :color="goal.status.color" class="w-100 d-flex justify-center">
                {{ goal.status.text }}
                </v-chip>
            </div>
            </v-card>
        </div>
    </v-card>

</template>