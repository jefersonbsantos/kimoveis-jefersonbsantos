import { NextFunction, Request, Response } from "express";
import { RealEstate, Schedule } from "../../entities";
import { realEstateRepo, scheduleRepo } from "../../repositories";
import { AppError } from "../../errors/App.error";

export const realEstateIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let id = req.params.id;

  if (!id) req.body.realEstateId;

  const foundId: RealEstate | null = await realEstateRepo.findOneBy({
    id: Number(id),
  });

  if (!foundId) throw new AppError("RealEstate not found", 404);

  return next();
};

export const verifyUserSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { sub } = res.locals.decoded;

  const foundSchedule: Schedule | null = await scheduleRepo.findOneBy({
    date: req.body.date,
    hour: req.body.hour,
    user: {
      id: sub,
    },
  });

  if (foundSchedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
