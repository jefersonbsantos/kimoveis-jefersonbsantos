import { Response, Request, NextFunction } from "express";
import { Category, User } from "../entities";
import { categoryRepo, userRepo } from "../repositories";
import { AppError } from "../errors/App.error";

const verifyCategoryNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  if (!name) return next();

  const foundCategory: Category | null = await categoryRepo.findOneBy({ name });

  if (foundCategory) throw new AppError("Category already exists", 409);

  return next();
};

export default verifyCategoryNameExists;
