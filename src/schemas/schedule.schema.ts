import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realStateId: z.number().positive().int(),
  userId: z.string(),
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  userId: true,
});

export { scheduleSchema, scheduleCreateSchema };
