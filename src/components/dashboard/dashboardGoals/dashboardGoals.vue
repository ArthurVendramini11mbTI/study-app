<script lang="ts" setup>
  import { createGoalCard } from '@/composables/goal';
</script>

<template>
  <v-card class="mx-auto">
    <v-layout>
      <v-app-bar color="primary">

        <v-toolbar-title>My Goals</v-toolbar-title>

        <v-btn icon="mdi-plus" @click="createGoalCard = true"></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row density="comfortable">

           
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>

</template>