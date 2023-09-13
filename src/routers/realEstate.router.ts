import { Router } from "express";
import realEstateControllers from "../controllers/realEstate.controllers";
import { realEstateCreateSchema } from "../schemas/realEstate.schema";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import verifyUserPermission from "../middlewares/verifyPermission.middleware";
import verifyRealEstateAddressExists from "../middlewares/realEstateAdressExists.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  validateBody(realEstateCreateSchema),
  verifyToken,
  isAdmin,
  verifyUserPermission,
  verifyRealEstateAddressExists,
  realEstateControllers.create
);
realEstateRouter.get("", realEstateControllers.read);
