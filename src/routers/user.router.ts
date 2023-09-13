import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";
import userControllers from "../controllers/user.controllers";
import verifyEmailExists from "../middlewares/verifyEmailExists.middleware";
import { idExists } from "../middlewares/idExists.middleware";
import { isAdmin } from "../middlewares/isAdmin.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import verifyUserPermission from "../middlewares/verifyPermission.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userCreateSchema),
  verifyEmailExists,
  userControllers.create
);

userRouter.get("", verifyToken, verifyUserPermission, userControllers.read);
userRouter.patch(
  "/:id",
  validateBody(userUpdateSchema),
  idExists,
  verifyToken,
  verifyUserPermission,
  userControllers.update
);
userRouter.delete(
  "/:id",
  idExists,
  verifyToken,
  isAdmin,
  verifyUserPermission,
  userControllers.deleteUser
);
