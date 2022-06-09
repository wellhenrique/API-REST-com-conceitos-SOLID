import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateAvatarUserController } from "@modules/accounts/useCases/updateAvatarUser/UpdateAvatarUserController";
import { Router } from "express";
import multer from "multer";
import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createUserController = new CreateUserController();
const updateAvatarUserController = new UpdateAvatarUserController();

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateAvatarUserController.handle
);

export { usersRoutes };
