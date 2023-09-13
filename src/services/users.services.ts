import { userRepo } from "../repositories";
import {
  UserCreate,
  UserReturn,
  UserUpdate,
} from "../interfaces/user.interface";
import { userReadSchema, userReturnSchema } from "../schemas/user.schema";
import { User } from "../entities";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: UserReturn = userRepo.create(payload);
  await userRepo.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserReturn[]> => {
  const awaitRepo = await userRepo.find();
  return userReadSchema.parse(awaitRepo);
};

const update = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
  const updateUser = await userRepo.save({ ...user, ...payload });
  return userReturnSchema.parse(updateUser);
};

const deleteUser = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};

export default { create, read, update, deleteUser };
