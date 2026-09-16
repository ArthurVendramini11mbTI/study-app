import type { userType } from "@/types/userTypes";

export async function login(userData: userType) {
  const response = await fetch("http://localhost:5000/user/login", {
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