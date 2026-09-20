import { studySchema, GoalsSchema, createGoalInputSchema } from "@/schemas/goalSchema";
import { z } from 'zod'

export type Study = z.infer<typeof studySchema>;
export type createGoalInputType = z.infer<typeof createGoalInputSchema>
