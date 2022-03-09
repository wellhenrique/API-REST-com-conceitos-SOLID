import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password,
    });
  }
}

export { CreateUserUseCase };
