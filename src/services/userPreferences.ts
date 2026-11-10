import { authenticatedFetch, getErrorMessage } from './api'
import type { ThemeName } from '@/themes/palettes'

export async function updateThemePreference(theme: ThemeName) {
  const response = await authenticatedFetch('http://localhost:5000/users/preferences/theme', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ theme }),
  })

  if (!response.ok) {
    throw new Error(await getErrorMessage(response, 'Unable to save theme'))
  }

  return response.json() as Promise<{ theme: ThemeName }>
}
