export async function authenticatedFetch(input: RequestInfo | URL, init: RequestInit = {}) {
  const response = await fetch(input, {
    ...init,
    credentials: 'include',
  })

  if (response.status === 401) {
    if (window.location.pathname !== '/') {
      window.location.replace('/')
    }
  }

  return response
}

export async function getErrorMessage(response: Response, fallback: string) {
  const errorData = await response.json().catch(() => null)
  return errorData?.message ?? fallback
}
