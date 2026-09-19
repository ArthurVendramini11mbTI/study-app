import type { userType } from "@/types/userTypes";
import { jwtDecode } from "jwt-decode";

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

type JwtPayload = {
  sub: string;
  iat: number;
  exp: number;
};

export function getUserId() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const payload = jwtDecode<JwtPayload>(token);

  return Number(payload.sub);
}