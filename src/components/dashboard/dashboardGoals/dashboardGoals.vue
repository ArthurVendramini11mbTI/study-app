<script setup lang="ts"> 
  import { createGoalCard } from '@/composables/goal';
  import { GoalsSchema } from '@/types/goals';
  import { Icon } from '@iconify/vue'

  const goals = GoalsSchema.parse([
    {
      title: 'Estudar Node',
      icon: 'tabler:book',
      color: 'primary',
      progress: 50,
    },

    {
      title: 'Estudar MySQL',
      icon: 'tabler:database',
      color: 'error',
      progress: 95,
    },

    {
      title: 'Estudar Adonis',
      icon: 'tabler:star',
      color: 'warning',
      progress: 5,
    },

        {
      title: 'Estudar Adonis',
      icon: 'tabler:star',
      color: 'warning',
      progress: 5,
    },
  ])
</script>

<template>
  <v-card class="mx-auto h-100 light-glass-card rounded-xl pa-2 d-flex justify-space-around flex-column align-center">

    <div class="d-flex justify-space-between align-center mb-2 w-100">
            <v-card-title>
              Study Goals
            </v-card-title>

            <v-btn class="dark-glass-item rounded-lg btn" @click="createGoalCard = true">
              <Icon icon="tabler:plus" width="20" height="20" class="me-2" />
              New goal
            </v-btn>
    </div>

    <div class="d-flex flex-column overflow-y-hidden ga-2 w-100 pt-1">
      <v-card height="56" class="mx-auto w-100 inner-card card rounded-lg d-flex justify-space-between align-center px-5" v-for="goal in goals.slice(0, 4)">

        <div class="d-flex ga-4 w-75 align-center" >
          <div>
            <Icon :icon="goal.icon" :style="{ color: `rgb(var(--v-theme-${goal.color}))` }" width="24" height="24" />
          </div>

          <div class="d-flex flex-column w-100">
            <p class="ma-1">{{goal.title}}</p>

            <v-progress-linear
              :model-value="goal.progress"
              height="8"
              rounded
              :color="goal.color"
              style="width: 95%"
            />
          </div>
        </div>

        <div class="d-flex align-center ga-2" style="width: 30%;">
          <span style="min-width: 35px;">{{ goal.progress }}%</span>
          <v-chip :color="goal.status.color" class="w-100 d-flex justify-center dark-glass-card">
            <span>{{ goal.status.text }}</span>
          </v-chip>
        </div>
      </v-card>
    </div>

    <div>
        <v-btn
            class="text-none"
            text="View all goals >"
            variant="text"
            slim
        ></v-btn>
    </div>

  </v-card>
</template>
