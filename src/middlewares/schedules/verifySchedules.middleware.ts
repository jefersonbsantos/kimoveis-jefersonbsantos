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

export const verifyRealEstate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundSchedule: Schedule | null = await scheduleRepo.findOneBy({
    date: req.body.date,
    hour: req.body.hour,
    realEstate: {
      id: req.body.realEstateId,
    },
  });

  if (foundSchedule)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};

export const verifyHours = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const hour = req.body.hour.substring(0, 2);

  if (hour < 8 || hour > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  return next();
};

export const verifyWeekDay = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const weekDay = new Date(req.body.date);

  const date = weekDay.getDay();

  if (date == 0 || date == 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);

  return next();
};
