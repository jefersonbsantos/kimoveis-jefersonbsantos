import { Router } from "express";
import scheduleControllers from "../controllers/schedule.controllers";
import { scheduleCreateSchema } from "../schemas/schedule.schema";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import verifyUserPermission from "../middlewares/verifyPermission.middleware";
import {
  realEstateIdExists,
  verifyUserSchedule,
} from "../middlewares/schedules/verifySchedules.middleware";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  verifyToken,
  validateBody(scheduleCreateSchema),
  // realEstateIdExists,
  verifyUserSchedule,
  scheduleControllers.create
);

scheduleRouter.get(
  "/realEstate/:id",
  verifyToken,
  isAdmin,
  verifyUserPermission,
  realEstateIdExists,
  scheduleControllers.read
);
