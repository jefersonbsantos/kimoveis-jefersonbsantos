import { z } from "zod";

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.string().or(z.number()).default(0),
  size: z.number(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().positive().int(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
  categoryId: z.number(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  sold: true,
});

export { realEstateSchema, realEstateCreateSchema };
