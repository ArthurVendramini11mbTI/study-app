import type { createGoalInputType } from '@/types/goals'

export async function createGoalService(createGoalData: createGoalInputType) {
  const response = await fetch("http://localhost:5000/goals/create-goal", {
    method: "POST",

    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },

    body: JSON.stringify(createGoalData),
  });

  if (!response.ok) {
    throw new Error("Invalid Goal");
  }

  return response.json();
}

export async function getGoalsService() {
  const response = await fetch("http://localhost:5000/goals/get-goals", {
    method: "GET",

    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
  });

  if (!response.ok) {
    throw new Error("Error zuadoi");
  }

  return response.json();
}

export async function deleteGoalService(goalId: number) {
  const response = await fetch(`http://localhost:5000/goals/delete-goal/${goalId}`, {
    method: "DELETE",

    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },

  });

  if (!response.ok) {
    throw new Error("Erro ao excluir goal");
  }

  return response.json();
}
