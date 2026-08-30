<script setup lang="ts">
    import { studySchema } from '@/types/goals';
    
        const recentGoals = studySchema.parse([
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
                day: 'Today',
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
        },
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
                day: 'Today',
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
        },
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
                day: 'Today',
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
        },
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
                day: 'Today',
                time: {
                    hours: 9,
                    minutes: 10
                }
            }
        },
            
            
        ])
</script>

<template>
    <v-card text="" title="" class="w-100 light-glass-card rounded-xl pa-2 pb-8">
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
            <v-card height="56" class="mx-auto w-100 inner-card card rounded-lg d-flex justify-space-between align-center px-5 py-1" v-for="goal in recentGoals">
            <div class="d-flex align-center ga-10">
                <div>
                    <v-icon :icon="goal.icon" :color="goal.color" size="28"></v-icon>
                </div>

                <div class="d-flex flex-column">
                    <span class="text-body-1">{{goal.title}}</span>
                    <span class="text-caption">{{ goal.description }}</span>
                </div>
            </div>

            <div>
                <p class="ma-0">{{ goal.StudyingTime.hours }}h {{ goal.StudyingTime.minutes }}m</p>
            </div>

            <div class="d-flex align-center ga-15">
                <div>
                    <p class="ma-0">{{ goal.when.day }}; {{ goal.when.time.hours }}:{{ goal.when.time.minutes }} AM</p>
                </div>

                <v-btn class="btn">
                    <v-icon icon="mdi-play"></v-icon>
                </v-btn>
            </div>
            </v-card>
        </div>
    </v-card>

</template>
