import { Request, Response } from "express";
import { Category } from "../entities";
import categoriesServices from "../services/categories.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoriesServices.create(req.body);

  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const categories = await categoriesServices.read();
  return res.status(200).json(categories);
};

export default { create, read };
