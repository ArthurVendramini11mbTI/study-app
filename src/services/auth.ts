import type { userType } from "@/types/userTypes";

export async function login(userData: userType) {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Email ou senha inválidos");
  }

  return response.json();
}

export async function sign(userData: userType) {
  const response = await fetch("http://localhost:5000/users/create-user", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Email ou senha inválidos");
  }

  return response.json();
}