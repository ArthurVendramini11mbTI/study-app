<script setup lang="ts"> 
  import { createGoalCard } from '@/composables/goal';
  import { GoalsSchema } from '@/types/goals';

  const goals = GoalsSchema.parse([
    {
      title: 'Estudar Node',
      icon: '$vuetify',
      color: 'blue',
      progress: 50,
    },

    {
      title: 'Estudar MySQL',
      icon: '$command',
      color: 'red',
      progress: 95,
    },

    {
      title: 'Estudar Adonis',
      icon: '$eyeDropper',
      color: 'yellow',
      progress: 5,
    },
  ])
</script>

<template>
  <v-card class="mx-auto h-100 light-glass-card rounded-xl pa-2 ">

    <div class="d-flex justify-space-between align-center mb-2">
            <v-card-title>
              Study Goals
            </v-card-title>

              <v-btn class="dark-glass-item rounded-lg btn" prepend-icon="mdi-plus" @click="createGoalCard = true">
                New goal
              </v-btn>
    </div>

    <div class="d-flex flex-column overflow-y-hidden ga-2 w-100">
      <v-card  class="mx-auto w-100  inner-card card rounded-lg d-flex justify-space-between align-center pr-5 pl-5" v-for="goal in goals">
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


