// src/products/rusticFurniture.ts

import { Chair, Sofa, Table } from "../models/productInterfaces";

export class RusticChair implements Chair {
  sitOn(): string {
    return "Sitting on a rough wooden rustic chair";
  }
}

export class RusticSofa implements Sofa {
  lieOn(): string {
    return "Relaxing on a log-frame rustic sofa";
  }
}

export class RusticTable implements Table {
  putItem(): string {
    return "Placing item on a tree-trunk rustic table";
  }
}
