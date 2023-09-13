import { Request, Response } from "express";
import usersServices from "../services/users.services";
import { UserRead, UserReturn } from "../interfaces/user.interface";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await usersServices.create(req.body);

  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users = await usersServices.read();
  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const { foundEntity } = res.locals;

  const user: UserReturn = await usersServices.update(foundEntity, req.body);
  return res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  await usersServices.deleteUser(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, deleteUser };
