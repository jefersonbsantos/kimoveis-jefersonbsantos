import { Repository } from "typeorm";
import { categoryCreateSchema } from "../schemas/category.schema";
import { Category } from "../entities";
import { z } from "zod";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;

type CategoryRepo = Repository<Category>;

export { CategoryCreate, CategoryRepo };
