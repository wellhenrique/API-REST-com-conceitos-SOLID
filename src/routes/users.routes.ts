import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateAvatarUserController } from "@modules/accounts/useCases/updateAvatarUser/UpdateAvatarUserController";
import { Router } from "express";
import multer from "multer";

const usersRoutes = Router();

const upload = multer({
  dest: "avatar",
});

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const updateAvatarUserController = new UpdateAvatarUserController();
usersRoutes.patch(
  "/avatar",
  upload.single("file"),
  updateAvatarUserController.handle
);

export { usersRoutes };
