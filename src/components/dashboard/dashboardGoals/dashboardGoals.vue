<script setup lang="ts"> 
  import { createGoalCard } from '@/composables/goal';

      const goals = [
        {
            title: 'Estudar Node',
            icon: '$vuetify',
            status: {
              text: 'In progress',
              color: 'blue',
            },
            color: 'blue',
            progress: 50
        },
        {
            title: 'Estudar MySQL',
            icon: '$command',
            status: {
              text: 'Almost Done',
              color: 'purple',
            },
            color: 'red',
            progress: 95
        },
        {
            title: 'Estudar Adonis',
            icon: '$eyeDropper',
            status: {
              text: 'At risk',
              color: 'red',
            },
            color: 'yellow',
            progress: 30
        }
        
    ]
</script>

<template>
  <v-card class="mx-auto h-100 dark-glass-card rounded-xl pa-2 ">

    <div class="d-flex justify-space-between align-center mb-2">
            <p>Study Goals</p>

              <v-btn class="dark-glass-item rounded-lg btn" prepend-icon="mdi-plus" @click="createGoalCard = true">
                New goal
              </v-btn>
    </div>

    <div class="d-flex flex-column overflow-y-hidden ga-2 w-100">
      <v-card  class="mx-auto w-100 light-glass-card card rounded-lg d-flex justify-space-between align-center pr-5 pl-5" v-for="goal in goals">
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

        <div class="d-flex align-center ga-2 " style="width: 30%;">
          <p>{{ goal.progress }}%</p>
          <v-chip :color="goal.status.color"  class="w-100 d-flex justify-center">
            {{ goal.status.text }}
          </v-chip>
        </div>
      </v-card>
    </div>

  </v-card>
</template>

<style setup>
    .card:hover{
    transform: translateY(-1px);
    color: white;

    background: rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);


  box-shadow:
    0 0 12px rgba(139, 92, 246, 0.35),
    inset 0 0 12px rgba(139, 92, 246, 0.08);
    }
</style>
