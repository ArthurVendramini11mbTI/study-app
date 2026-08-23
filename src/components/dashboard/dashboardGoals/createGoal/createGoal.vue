<script setup lang="ts">
  import { ref } from 'vue';

  import {selectedIcon ,selectedColor, selectIconCard, createGoalCard} from '@/composables/goal'
import { number } from 'zod';

  const goalName = ref('')
  const goalDescription = ref('')
  const goalHours = ref<number | null>()
  const goalMinutes = ref<number | null>()

  const form = ref()

    const requiredRule = [
      (value: string) => {
        return !!value || 'You must write something'
      }
    ]

    const hoursRules = [
      (value: string | number | null) => {
        return value !== null && value !== ''
          ? true
          : 'You must write something'
      },

      (value: string | number) => {
        return Number.isFinite(Number(value))
          ? true
          : 'This needs to be a number'
      },

      (value: string | number) => {
        return Number(value) >= 0 ? true : 'Hours cannot been negative' 
      }
    ]

    const minutesRules = [
      (value: string | number | null) => {
        return value !== null && value !== ''
          ? true
          : 'You must write something'
      },

      (value: string | number) => {
        return Number.isFinite(Number(value))
          ? true
          : 'This needs to be a number'
      },

      (value: string | number) => {
        return Number(value) < 60 && Number(value) >= 0 ? true : 'Minutes must been between 0 and 60' 
      }
    ]

    const timeTogetherRule = () => {
      const hours = Number(goalHours.value ?? 0)
      const minutes = Number(goalMinutes.value ?? 0)

      return hours > 0 || minutes > 0
        ? true
        : 'Hours and minutes cannot both be 0'
    }

      async function createGoal() {
        const { valid } = await form.value.validate()


        if (!valid) {
            return
        }

        createGoalCard.value = false

        goalName.value = ''
        goalDescription.value = ''
        goalHours.value = null
        goalMinutes.value = null
    }
</script>

<template>
  <div class="pa-4 text-center ">
    <v-dialog v-model="createGoalCard" max-width="500" >
      <v-card prepend-icon="mdi-bullseye-arrow" title="Create a goal"  class="dark-glass-card rounded-xl">
        <v-card-text>
            <v-form ref="form" @submit.prevent="createGoal">
              <v-text-field label="Goal name" v-model="goalName" :rules="requiredRule"></v-text-field>
              <v-text-field label="Goal description" v-model="goalDescription" :rules="requiredRule"></v-text-field>

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
                  <v-text-field label="Hours" :rules="[...hoursRules, timeTogetherRule]" v-model="goalHours"/>
                  <v-text-field label="Minutes"  :rules="[...minutesRules,timeTogetherRule]" v-model="goalMinutes"/>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-card-actions class="mr-4">
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="createGoalCard = false"></v-btn>

                <v-btn  text="Save" class="btn" type="submit"></v-btn>
              </v-card-actions>
            </v-form>
        </v-card-text>
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