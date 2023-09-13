import { Router } from "express";
import { categoryCreateSchema } from "../schemas/category.schema";
import { validateBody } from "../middlewares/validateBody.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import verifyUserPermission from "../middlewares/verifyPermission.middleware";
import categoryController from "../controllers/category.controllers";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import verifyCategoryNameExists from "../middlewares/categoryNameExists.middleware";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  validateBody(categoryCreateSchema),
  verifyToken,
  isAdmin,
  verifyUserPermission,
  verifyCategoryNameExists,
  categoryController.create
);

categoryRouter.get("", categoryController.read);
categoryRouter.get("/:id/realEstate", categoryController.read);
