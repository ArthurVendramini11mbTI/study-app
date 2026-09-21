<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { getIconColor } from "@/composables/iconColor";
import { GoalsSchema } from "@/schemas/goalSchema";
import { getGoalsService } from "@/services/goalService";
import {createGoalCard,goalForm, editingGoal, selectedGoalId} from '@/composables/goal'

 type Goals = ReturnType<typeof GoalsSchema.parse>;

 const goals = ref<Goals>([]);

function resetGoalForm() {
  goalForm.name = "";
  goalForm.description = "";
  goalForm.color = "#3b82f6";
  goalForm.icon = "tabler:book";
  goalForm.hours = null;
  goalForm.minutes = null;
}

function newGoal() {
  editingGoal.value = false;

  resetGoalForm();

  createGoalCard.value = true;
}

function editGoal(id: number) {
  const goal = goals.value.find((goal) => goal.id === id);

  if (!goal) {
    return;
  }

  editingGoal.value = true;

  selectedGoalId.value = goal.id

  goalForm.name = goal.title;
  goalForm.description = goal.description;
  goalForm.color = goal.color;
  goalForm.icon = goal.icon;
  goalForm.hours = goal.targetTime.hours;
  goalForm.minutes = goal.targetTime.minutes;

  createGoalCard.value = true;
}

onMounted(async () => {
  try {
    const goalsFromAPI = await getGoalsService();

    goals.value = GoalsSchema.parse(goalsFromAPI);
  } catch (error) {
    console.error("Erro ao buscar goals:", error);
  }
});

</script>

<template>
  <v-card class="mx-auto h-100 light-glass-card rounded-xl pa-2 d-flex justify-space-around flex-column align-center">

    <div class="d-flex justify-space-between align-center mb-2 w-100">
            <v-card-title>Study Goals</v-card-title>

            <v-btn class="dark-glass-item rounded-lg btn" @click="newGoal">
              <Icon icon="tabler:plus" width="20" height="20" class="me-2" />
              New goal
            </v-btn>
    </div>

    <div class="d-flex flex-column overflow-y-hidden ga-2 w-100 pt-4 h-75">
      <template v-if="goals.length > 0">
        <v-card @click="createGoalCard = true, editGoal(goal.id)" v-for="goal in goals.slice(0, 4)" :key="goal.id" height="56" class="mx-auto w-100 inner-card card rounded-lg d-flex justify-space-between align-center px-5">
          <div class="d-flex ga-4 w-75 align-center">
            <div>
              <Icon :icon="goal.icon" :style="{ color: getIconColor(goal.color) }" width="28" height="28"/>
            </div>

            <div class="d-flex flex-column w-100">
              <p class="ma-1">{{ goal.title }}</p>

              <v-progress-linear :model-value="goal.progress" height="8" rounded :color="goal.color" style="width: 95%"/>
            </div>
          </div>

          <div class="d-flex align-center ga-2" style="width: 30%">
            <span style="min-width: 35px">{{ goal.progress }}%</span>

            <v-chip :color="goal.status.color" class="w-100 d-flex justify-center dark-glass-card">{{ goal.status.text }}</v-chip>
          </div>
        </v-card>
      </template>

      <div v-else class="d-flex justify-center align-center h-75">
        <v-chip variant="plain">Your goals are empty</v-chip>
      </div>
    </div>

    <div>
        <v-btn class="text-none" text="View all goals >" variant="text" slim></v-btn>
    </div>

  </v-card>
</template>
