// client.ts
import { FurnitureFactory } from "./furniture-factory";

export class FurnitureStore {
  private factory: FurnitureFactory;

  constructor(factory: FurnitureFactory) {
    this.factory = factory;
  }

  buyFurnitureSet(): void {
    const chair = this.factory.createChair();
    const sofa = this.factory.createSofa();
    const table = this.factory.createTable();

    console.log("🪑 " + chair.sitOn());
    console.log("🛋️ " + sofa.lieOn());
    console.log("🪩 " + table.putItem());
  }

  buyChair(): void {
    const chair = this.factory.createChair();
    console.log("🪑 " + chair.sitOn());
    console.log("✅ Chair purchased!");
  }

  buySofa(): void {
    const sofa = this.factory.createSofa();
    console.log("🛋️ " + sofa.lieOn());
    console.log("✅ Sofa purchased!");
  }

  buyTable(): void {
    const table = this.factory.createTable();
    console.log("🪩 " + table.putItem());
    console.log("✅ Table purchased!");
  }
}
