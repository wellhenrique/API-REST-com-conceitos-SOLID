import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {});
  usersRepositoryInMemory = new UsersRepositoryInMemory();
  authenticateUserUseCase = new AuthenticateUserUseCase(
    usersRepositoryInMemory
  );
  createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  it("should be able to authenticate a user", async () => {
    const user: ICreateUserDTO = {
      name: "Josefino",
      email: "JosefinodaSilva@gmail.com",
      driver_license: "2384048",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an nonexist user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "fake@gmail.com",
        password: "123fake",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "1234",
        email: "user@user.com",
        name: "User Fake",
        password: "1234",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: "user@user.com",
        password: "4321",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
