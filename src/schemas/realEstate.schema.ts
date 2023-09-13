import { z } from "zod";
import { scheduleSchema } from "./schedule.schema";
import { categorySchema } from "./category.schema";
import { addressSchema } from "./address.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string(),
  size: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  addressId: z.number(),
  categoryId: z.number(),
  schedules: scheduleSchema,
  category: categorySchema,
  address: addressSchema,
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  schedules: true,
  category: true,
  addresss: true,
});

export { realEstateSchema, realEstateCreateSchema };
