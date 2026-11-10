import type { userType } from "@/types/userTypes";
import { getErrorMessage } from './api'

export async function login(userData: userType) {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: 'include',

    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Invalid email or password"));
  }

  return response.json();
}

export async function sign(userData: userType) {
  const response = await fetch("http://localhost:5000/users/create-user", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: 'include',

    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, "Unable to create account"));
  }

  return response.json();
}

export async function hasActiveSession() {
  try {
    const response = await fetch("http://localhost:5000/users/session", {
      method: 'GET',
      credentials: 'include',
    })

    return response.ok
  } catch {
    return false
  }
}

export async function logout() {
  await fetch("http://localhost:5000/users/logout", {
    method: 'POST',
    credentials: 'include',
  })
}
