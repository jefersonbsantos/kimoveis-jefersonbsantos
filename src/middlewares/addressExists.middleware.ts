import { Response, Request, NextFunction } from "express";
import { Address } from "../entities";
import { addressRepo } from "../repositories";
import { AppError } from "../errors/App.error";

const verifyAddressNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;

  if (!address) return next();

  const foundAddress: Address | null = await addressRepo.findOneBy({
    street: address.street,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });

  if (foundAddress) throw new AppError("Address already exists", 409);

  return next();
};

export default verifyAddressNameExists;
