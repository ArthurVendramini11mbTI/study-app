import { z } from 'zod'

export const GoalsSchema = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.string(),
    target_seconds: z.number().int().positive(),
    accumulated_seconds: z.number().int().nonnegative(),
    id: z.number().int().positive(),
  })
).transform((goals) => {
  return goals.map((goal) => {
    const progress = Math.min(
      Math.round(
        (goal.accumulated_seconds / goal.target_seconds) * 100
      ),
      100
    );

    const targetTime = {
      hours: Math.floor(goal.target_seconds / 3600),
      minutes: Math.floor((goal.target_seconds % 3600) / 60),
    };

    const accumulatedTime = {
      hours: Math.floor(goal.accumulated_seconds / 3600),
      minutes: Math.floor((goal.accumulated_seconds % 3600) / 60),
    };

    let status;

    if (progress <= 15) {
      status = {
        text: "Time to start!",
        color: "warning",
      };
    } else if (progress <= 89) {
      status = {
        text: "In progress",
        color: "blue",
      };
    } else {
      status = {
        text: "Almost done",
        color: "success",
      };
    }

    return {
      title: goal.title,
      description: goal.description,
      icon: goal.icon,
      color: goal.color,
      id: goal.id,

      progress,
      status,

      targetTime,
      accumulatedTime,
    };
  });
});



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

export const createGoalInputSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),

    color: z.string().min(1),
    icon: z.string().min(1),

    targetTime: timeSchema,
})

