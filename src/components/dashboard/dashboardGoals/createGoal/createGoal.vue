<script setup lang="ts">
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue'
  import {selectIconCard, createGoalCard, goalsRefreshKey} from '@/composables/goal'
  import { createGoalService, updateGoalService, deleteGoalService } from '@/services/goalService'
  import { createGoalInputSchema } from '@/schemas/goalSchema'
  import { goalForm, editingGoal, selectedGoalId } from '@/composables/goal'

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
      const hours = Number(goalForm.hours ?? 0)
      const minutes = Number(goalForm.minutes ?? 0)

      return hours > 0 || minutes > 0
        ? true
        : 'Hours and minutes cannot both be 0'
    }

      async function submitGoal() {
        const { valid } = await form.value.validate()

        if (!valid) {
            return
        }


        const result = createGoalInputSchema.parse({
          title: goalForm.name,
          description: goalForm.description,

          color: goalForm.color,
          icon: goalForm.icon,

          targetTime: {
            hours: Number(goalForm.hours),
            minutes: Number(goalForm.minutes)
          }
        })

        try {
            if (editingGoal.value && selectedGoalId.value) {
              await updateGoalService(selectedGoalId.value, result)
            } else {
              await createGoalService(result)
            }

            goalsRefreshKey.value++
            selectedGoalId.value = null
            createGoalCard.value = false
        } catch(err) {
            console.error("Unable to save goal", err)
        }
    }

    async function deleteGoal() {
      try{
        if(selectedGoalId.value){
          await deleteGoalService(selectedGoalId.value)
          goalsRefreshKey.value++
        }

        selectedGoalId.value = null
        createGoalCard.value = false
      }catch(err){
        console.error("Unable to delete goal", err)
    }
}

</script>

<template>
  <div class="pa-4 text-center ">
    <v-dialog v-model="createGoalCard" max-width="500" >
      <v-card :title="editingGoal ? 'Edit goal' : 'Create goal'"  class="dark-glass-card rounded-xl">
        <template #prepend><Icon :icon="editingGoal ? 'tabler:pencil' : 'tabler:target-arrow'" width="24" height="24" /></template>
        <v-card-text>
            <v-form ref="form" @submit.prevent="submitGoal">
              <v-text-field label="Goal name" v-model="goalForm.name" :rules="requiredRule"></v-text-field>
              <v-text-field label="Goal description" v-model="goalForm.description" :rules="requiredRule"></v-text-field>

              <v-row>
                <v-col cols="2">
                  <v-btn class="icon-selector w-100" variant="flat" height="56" @click="selectIconCard = true">
                    <div class="d-flex flex-column align-center justify-center ga-1">
                      <Icon :icon="goalForm.icon" :style="{ color: goalForm.color }" width="28" height="28" />
                      <span class="text-caption">Icon</span>
                    </div>
                  </v-btn>
                </v-col>

                <v-col cols="10" class="d-flex ga-2">
                  <v-text-field label="Hours" :rules="[...hoursRules, timeTogetherRule]" v-model="goalForm.hours"/>
                  <v-text-field label="Minutes"  :rules="[...minutesRules,timeTogetherRule]" v-model="goalForm.minutes"/>
                </v-col>
              </v-row>

              <v-divider></v-divider>

              <v-card-actions class="mr-4">
                <v-spacer></v-spacer>
                <v-btn text="Close" variant="plain" @click="createGoalCard = false"></v-btn>
                <v-btn v-if="editingGoal" type="button" @click="deleteGoal()" text="Delete" color="error"></v-btn>
                <v-btn class="btn btn-primary" type="submit">{{ editingGoal ? "Save" : "Create"}}</v-btn>
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


  background: rgba(var(--v-theme-surface-strong), 0.62) !important;
  border: 1px solid rgba(var(--v-theme-border), 0.32);

  color: rgb(var(--v-theme-muted));

  transition: all 0.25s ease;
}

.icon-selector:hover {
  transform: translateY(-2px);

  color: white;
}

</style>
