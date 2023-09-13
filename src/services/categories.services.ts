import { Category } from "../entities";
import { CategoryCreate } from "../interfaces/category.interface";
import { categoryRepo } from "../repositories";

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepo.create(payload);
  await categoryRepo.save(category);

  return category;
};

const read = async (): Promise<Category[]> => {
  const awaitRepo = await categoryRepo.find();
  return awaitRepo;
};

export default { create, read };
