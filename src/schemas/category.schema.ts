import { z } from "zod";
import { realEstateSchema } from "./realEstate.schema";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  realEstate: realEstateSchema.array(),
});

const categoryCreateSchema = categorySchema.omit({
  id: true,
  realEstate: true,
});

export { categorySchema, categoryCreateSchema };
