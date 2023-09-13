import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";
import {
  userCreateSchema,
  userReadSchema,
  userReturnSchema,
} from "../schemas/user.schema";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>;

export { UserCreate, UserRead, UserReturn, UserUpdate, UserRepo };
