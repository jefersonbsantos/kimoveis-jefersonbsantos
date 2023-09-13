import { Response, Request, NextFunction } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import { AppError } from "../errors/App.error";

const verifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) return next();

  const foundUser: User | null = await userRepo.findOneBy({ email });

  if (foundUser) throw new AppError("Email already exists", 409);

  // res.locals.foundUser = foundUser;
  return next();
};

export default verifyEmailExists;
