import { Router } from "express";
import scheduleControllers from "../controllers/schedule.controllers";
import { scheduleCreateSchema } from "../schemas/schedule.schema";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import verifyUserPermission from "../middlewares/verifyPermission.middleware";

export const scheduleRouter: Router = Router();

scheduleRouter.post("", verifyToken, scheduleControllers.create);

scheduleRouter.get(
  "/realEstate/:id",
  validateBody(scheduleCreateSchema),
  verifyToken,
  isAdmin,
  verifyUserPermission,
  scheduleControllers.read
);
