import type { userType } from "@/types/userTypes";
import { getErrorMessage } from './api'
import { applyTheme, applyThemeFromUnknown } from '@/composables/theme'
import { isThemeName, type ThemeName } from '@/themes/palettes'
import { readonly, ref } from 'vue'

export type SessionUser = {
  id: number
  name: string | null
  email: string
  created_at: string | null
  theme: ThemeName
}

const currentUser = ref<SessionUser | null>(null)
let sessionResolved = false
let sessionRequest: Promise<SessionUser | null> | null = null

function setSessionUser(user: SessionUser | null) {
  currentUser.value = user
  sessionResolved = true
  applyThemeFromUnknown(user?.theme)
}

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

  const data = await response.json();
  setSessionUser(data.user)
  return data;
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

  const data = await response.json();
  setSessionUser(data.user)
  return data;
}

export async function getActiveSession(force = false) {
  if (sessionResolved && !force) {
    return currentUser.value
  }

  if (sessionRequest && !force) {
    return sessionRequest
  }

  sessionRequest = (async () => {
    try {
      const response = await fetch("http://localhost:5000/users/session", {
        method: 'GET',
        credentials: 'include',
      })

      if (response.status === 401) {
        setSessionUser(null)
        return null
      }

      if (!response.ok) {
        throw new Error(await getErrorMessage(response, 'Unable to load session'))
      }

      const data = await response.json()
      setSessionUser(data.user)
      return currentUser.value
    } catch {
      return null
    } finally {
      sessionRequest = null
    }
  })()

  return sessionRequest
}

export async function hasActiveSession() {
  return (await getActiveSession()) !== null
}

export function updateCurrentUserTheme(theme: ThemeName) {
  if (currentUser.value && isThemeName(theme)) {
    currentUser.value = {...currentUser.value, theme}
  }
}

export function useCurrentUser() {
  return readonly(currentUser)
}

export async function logout() {
  await fetch("http://localhost:5000/users/logout", {
    method: 'POST',
    credentials: 'include',
  })

  currentUser.value = null
  sessionResolved = true
  applyTheme('blue')
}
