import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = await this.categories.find(
      (category) => category.name === name
    );

    return category;
  }
  async list(): Promise<Category[]> {
    const listCategory = await this.categories;
    return listCategory;
  }
  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };
