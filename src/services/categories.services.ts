import { Category } from "../entities";
import { AppError } from "../errors/App.error";
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

const readById = async (id: number): Promise<Category> => {
  const category = await categoryRepo.findOne({
    where: { id: id },
    relations: { realEstate: true },
  });

  if (!category) throw new AppError("Category not found", 404);

  return category;
};

export default { create, read, readById };
