import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAvatarUserUseCase } from "./UpdateAvatarUserUseCase";

class UpdateAvatarUserController {
  async handle(request: Request, response: Response) {
    const { id: user_id } = request.user;

    const avatar_file = null;

    const updateUserAvatarUseCase = container.resolve(UpdateAvatarUserUseCase);

    await updateUserAvatarUseCase.execute({ user_id, avatar_file });

    return response.send(200).send();
  }
}
export { UpdateAvatarUserController };
