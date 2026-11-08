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
    throw new Error("Unable to fetch goals");
  }

  return response.json();
}

export async function updateGoalService(goalId: number, updateGoalData: createGoalInputType) {
  const response = await fetch(`http://localhost:5000/goals/update-goal/${goalId}`, {
    method: "PUT",

    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },

    body: JSON.stringify(updateGoalData),
  });

  if (!response.ok) {
    throw new Error("Unable to update goal");
  }

  return response.json();
}

export async function trackGoalTimeService(goalId: number, action: 'start' | 'stop') {
  const response = await fetch(`http://localhost:5000/goals/track-time/${goalId}`, {
    method: "PATCH",

    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },

    body: JSON.stringify({ action }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(errorData?.message ?? "Unable to track goal time");
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
    throw new Error("Unable to delete goal");
  }

  return response.json();
}
