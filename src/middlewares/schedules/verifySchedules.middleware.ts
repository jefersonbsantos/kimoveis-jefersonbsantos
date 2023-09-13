import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../../entities";
import { realEstateRepo } from "../../repositories";
import { AppError } from "../../errors/App.error";

export const realEstateIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let id: number = Number(req.params.id);

  if (!id) req.body.realEstateId;

  const foundId: RealEstate | null = await realEstateRepo.findOneBy({
    id: Number(id),
  });
  if (!foundId) throw new AppError("RealEstate not found", 404);

  return next();
};
