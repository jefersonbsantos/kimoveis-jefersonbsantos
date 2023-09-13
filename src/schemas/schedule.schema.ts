import { z } from "zod";
import { userSchema } from "./user.schema";
import { realEstateSchema } from "./realEstate.schema";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realStateId: z.number(),
  userId: z.number(),
  user: userSchema,
  realEstate: realEstateSchema,
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
  user: true,
  realEstate: true,
});

export { scheduleSchema, scheduleCreateSchema };
