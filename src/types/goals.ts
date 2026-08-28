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

const timeSchema = z.object({
  hours: z.number().int().nonnegative(),
  minutes: z.number().int().min(0).max(59),
});

export const studySchema = z.array(z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    icon: z.string().min(1),
    color: z.string().min(1),
    progress: z.number().int().min(0).max(100),
    StudyingTime: timeSchema,
    when: z.object({
    day: z.string().min(1),
    time: timeSchema,
  }),
}));

export type Study = z.infer<typeof studySchema>;