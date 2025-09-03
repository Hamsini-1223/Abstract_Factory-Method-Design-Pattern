// src/products/classicFurniture.ts

import { Chair, Sofa, Table } from "../models/productInterfaces";

export class ClassicChair implements Chair {
  sitOn(): string {
    return "Sitting on a wooden classic chair";
  }
}

export class ClassicSofa implements Sofa {
  lieOn(): string {
    return "Relaxing on a fabric classic sofa";
  }
}

export class ClassicTable implements Table {
  putItem(): string {
    return "Placing item on a wooden classic table";
  }
}
