// factories.ts
import { FurnitureFactory } from "./furniture-factory";
import { Chair, Sofa, Table } from "./products";
import { ModernChair, ModernSofa, ModernTable } from "./modern-furniture";
import { ClassicChair, ClassicSofa, ClassicTable } from "./classic-furniture";

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }

  createTable(): Table {
    return new ModernTable();
  }
}

export class ClassicFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ClassicChair();
  }

  createSofa(): Sofa {
    return new ClassicSofa();
  }

  createTable(): Table {
    return new ClassicTable();
  }
}
