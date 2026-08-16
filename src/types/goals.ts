// src/types/goals.ts

import { z } from 'zod'

export const GoalsSchema = z.array(
  z.object({
    title: z.string(),
    icon: z.string(),
    color: z.string(),

    progress: z
      .number()
      .min(0)
      .max(100),
  })
).transform((goals) => {
  return goals.map((goal) => {
    if (goal.progress <= 15) {
      return {
        ...goal,
        status: {
          text: 'At risk',
          color: 'warning',
        },
      }
    }

    if (goal.progress <= 89) {
      return {
        ...goal,
        status: {
          text: 'In progress',
          color: 'blue',
        },
      }
    }

    return {
      ...goal,
      status: {
        text: 'Almost done',
        color: 'purple',
      },
    }
  })
})

export type Goals = z.infer<typeof GoalsSchema>