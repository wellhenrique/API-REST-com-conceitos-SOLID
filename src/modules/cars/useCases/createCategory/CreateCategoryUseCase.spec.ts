import { AppError } from "@shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-Memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe("Create Category", () => {
  let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
  let createCategoryUseCase: CreateCategoryUseCase;

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("Should not be able to create a new category with name exists ", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };

    expect(async () => {
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
