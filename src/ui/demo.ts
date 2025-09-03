// src/ui/demo.ts

import { FurnitureStore } from "../client/furnitureStore";
import {
  ModernFurnitureFactory,
  ClassicFurnitureFactory,
  RusticFurnitureFactory,
} from "../factories/concreteFactories";

export function runDemo(): void {
  try {
    console.log("Furniture Store Demo");
    console.log("===================");

    // Modern furniture
    console.log("\n=== Modern Furniture Set ===");
    const modernFactory = new ModernFurnitureFactory();
    const modernStore = new FurnitureStore(modernFactory);
    modernStore.buyFurnitureSet();

    // Classic furniture
    console.log("\n=== Classic Furniture Set ===");
    const classicFactory = new ClassicFurnitureFactory();
    const classicStore = new FurnitureStore(classicFactory);
    classicStore.buyFurnitureSet();

    // Rustic furniture
    console.log("\n=== Rustic Furniture Set ===");
    const rusticFactory = new RusticFurnitureFactory();
    const rusticStore = new FurnitureStore(rusticFactory);
    rusticStore.buyFurnitureSet();

    // Individual purchases
    console.log("\n=== Individual Purchases ===");
    modernStore.buyChair();
    classicStore.buySofa();
    rusticStore.buyTable();

    console.log("\nDemo completed!");
  } catch (error) {
    console.error("Demo error:", error);
  }
}
