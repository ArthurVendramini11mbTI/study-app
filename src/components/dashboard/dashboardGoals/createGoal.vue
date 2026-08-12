<script setup lang="ts">
  import { createGoalCard } from '@/composables/goal';
</script>

<template>
  <div class="pa-4 text-center ">
    <v-dialog v-model="createGoalCard" max-width="500" >
      <v-card prepend-icon="mdi-flag" title="Create a goal"  class="goalCard" color="white" variant="outlined">
        <v-card-text>
            <v-form>
              <v-text-field label="Goal name"></v-text-field>
              <v-text-field label="Goal description"></v-text-field>

              <div class="d-flex ga-2"> 
                <v-text-field label="Hours"></v-text-field>
                <v-text-field label="Minutes"></v-text-field>
              </div>
            </v-form>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="createGoalCard = false"></v-btn>

          <v-btn color="white" text="Save" variant="tonal" @click="createGoalCard = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
