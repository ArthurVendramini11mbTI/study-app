<script lang="ts" setup>
  import { createGoalCard } from '@/composables/goal';
import GoalCard from './goalCard.vue';
</script>

<template>
  <v-card class="mx-auto ">
    <v-layout>
      <v-app-bar color="indigo">

        <v-toolbar-title>My Goals</v-toolbar-title>

        <v-btn icon="mdi-plus" @click="createGoalCard = true"></v-btn>
      </v-app-bar>

      <v-main class="d-flex flex-column ga-2">
        <goal-card/>
      </v-main>
    </v-layout>
  </v-card>

</template>