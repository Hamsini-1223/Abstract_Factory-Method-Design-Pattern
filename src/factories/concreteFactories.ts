// src/factories/concreteFactories.ts

import { FurnitureFactory } from "./furnitureFactory";
import { Chair, Sofa, Table } from "../models/productInterfaces";
import {
  ModernChair,
  ModernSofa,
  ModernTable,
} from "../products/modernFurniture";
import {
  ClassicChair,
  ClassicSofa,
  ClassicTable,
} from "../products/classicFurniture";
import {
  RusticChair,
  RusticSofa,
  RusticTable,
} from "../products/rusticFurniture";

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

export class RusticFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new RusticChair();
  }

  createSofa(): Sofa {
    return new RusticSofa();
  }

  createTable(): Table {
    return new RusticTable();
  }
}
