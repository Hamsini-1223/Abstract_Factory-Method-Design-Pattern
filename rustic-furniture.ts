// rustic-furniture.ts
// Example: How to add a new "Rustic" furniture style

import { Chair, Sofa, Table } from "./products";
import { FurnitureFactory } from "./furniture-factory";

// Step 1: Create rustic furniture pieces
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

// Step 2: Create rustic factory
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

// Step 3: Use it (no changes needed to existing code!)
// const rusticFactory = new RusticFurnitureFactory();
// const store = new FurnitureStore(rusticFactory);
// store.buyFurnitureSet();
