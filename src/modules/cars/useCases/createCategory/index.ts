import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default function createCategoryController(): CreateCategoryController {
  const categoryRepository = new CategoriesRepository();

  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
}
