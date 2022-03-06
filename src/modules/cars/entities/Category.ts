import { Entity } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("categories")
class Category {
  @
  id?: string;

  name: string;
  
  description: string;
  
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
