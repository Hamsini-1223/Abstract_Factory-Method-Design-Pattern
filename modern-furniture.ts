// modern-furniture.ts
import { Chair, Sofa, Table } from "./products";

export class ModernChair implements Chair {
  sitOn(): string {
    return "Sitting on a sleek modern chair";
  }
}

export class ModernSofa implements Sofa {
  lieOn(): string {
    return "Relaxing on a modern leather sofa";
  }
}

export class ModernTable implements Table {
  putItem(): string {
    return "Placing item on a glass modern table";
  }
}
