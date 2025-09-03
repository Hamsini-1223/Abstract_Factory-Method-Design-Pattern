// src/client/furnitureStore.ts

import { FurnitureFactory } from "../factories/furnitureFactory";

export class FurnitureStore {
  private factory: FurnitureFactory;

  constructor(factory: FurnitureFactory) {
    this.factory = factory;
  }

  buyFurnitureSet(): void {
    try {
      const chair = this.factory.createChair();
      const sofa = this.factory.createSofa();
      const table = this.factory.createTable();

      console.log("Chair: " + chair.sitOn());
      console.log("Sofa: " + sofa.lieOn());
      console.log("Table: " + table.putItem());
    } catch (error) {
      console.error("Error buying furniture set:", error);
    }
  }

  buyChair(): void {
    try {
      const chair = this.factory.createChair();
      console.log("Chair: " + chair.sitOn());
      console.log("Chair purchased!");
    } catch (error) {
      console.error("Error buying chair:", error);
    }
  }

  buySofa(): void {
    try {
      const sofa = this.factory.createSofa();
      console.log("Sofa: " + sofa.lieOn());
      console.log("Sofa purchased!");
    } catch (error) {
      console.error("Error buying sofa:", error);
    }
  }

  buyTable(): void {
    try {
      const table = this.factory.createTable();
      console.log("Table: " + table.putItem());
      console.log("Table purchased!");
    } catch (error) {
      console.error("Error buying table:", error);
    }
  }
}
