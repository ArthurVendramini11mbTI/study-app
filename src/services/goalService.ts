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
