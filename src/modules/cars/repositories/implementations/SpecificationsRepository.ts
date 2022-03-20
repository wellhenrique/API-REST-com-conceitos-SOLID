import { Specification } from "@modules/cars/entities/Specification";
import { getRepository, Repository } from "typeorm";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const checkNameAlreadyExists = await this.repository.findOne({ name });

    return checkNameAlreadyExists;
  }
}

export { SpecificationsRepository };
