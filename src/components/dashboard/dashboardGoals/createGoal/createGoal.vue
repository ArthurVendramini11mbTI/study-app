<script setup lang="ts">
  import { createGoalCard } from '@/composables/goal';
  import { ref } from 'vue'
  import { selectIconCard } from '@/composables/goal';
  import {selectedIcon ,selectedColor} from '@/composables/goal'

</script>

<template>
  <div class="pa-4 text-center ">
    <v-dialog v-model="createGoalCard" max-width="500" >
      <v-card prepend-icon="mdi-flag" title="Create a goal"  class="dark-glass-card rounded-xl">
        <v-card-text>
            <v-form>
              <v-text-field label="Goal name"></v-text-field>
              <v-text-field label="Goal description"></v-text-field>

              <v-row>
                <v-col cols="2">
                  <v-btn class="icon-selector w-100" variant="flat" height="56" @click="selectIconCard = true">
                    <div class="d-flex flex-column align-center justify-center ga-1">
                      <v-icon size="28" :color="selectedColor">{{ selectedIcon }}</v-icon>
                      <span class="text-caption">Icon</span>
                    </div>
                  </v-btn>
                </v-col>

                <v-col cols="10" class="d-flex ga-2">
                  <v-text-field label="Hours" />
                  <v-text-field label="Minutes" />
                </v-col>
              </v-row>
            </v-form>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="mr-4">
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="createGoalCard = false"></v-btn>

          <v-btn  text="Save" class="btn" @click="createGoalCard = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.icon-selector {
  width: 80px;
  height: 80px;


  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.15);

  color: rgb(181, 181, 181);

  transition: all 0.25s ease;
}

.icon-selector:hover {
  transform: translateY(-2px);

  color: white;
}

</style>