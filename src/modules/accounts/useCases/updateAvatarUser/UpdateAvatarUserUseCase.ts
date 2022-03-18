import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repository/implementations/UsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateAvatarUserUseCase {
  constructor(
    @inject("users")
    private usersRepository: UsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const user = await this.usersRepository.findById(user_id);

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateAvatarUserUseCase };
