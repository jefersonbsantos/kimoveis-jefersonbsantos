import { Response, Request, NextFunction } from "express";
import { Category, RealEstate } from "../entities";
import { categoryRepo, realEstateRepo } from "../repositories";
import { AppError } from "../errors/App.error";

const verifyRealEstateAddressExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;

  if (!address) return next();

  const foundAddress: RealEstate | null = await realEstateRepo.findOneBy({
    address,
  });

  if (foundAddress) throw new AppError("Address already exists", 409);

  return next();
};

export default verifyRealEstateAddressExists;
