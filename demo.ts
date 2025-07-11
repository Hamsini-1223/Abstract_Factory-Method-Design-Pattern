// demo.ts
// Non-interactive demo version
import { FurnitureStore } from "./client";
import { ModernFurnitureFactory, ClassicFurnitureFactory } from "./factories";

function runDemo() {
  console.log("🏪 Furniture Store Demo");
  console.log("======================");

  // Customer wants modern furniture
  console.log("\n=== Modern Furniture Set ===");
  const modernFactory = new ModernFurnitureFactory();
  const modernStore = new FurnitureStore(modernFactory);
  modernStore.buyFurnitureSet();

  console.log("\n=== Classic Furniture Set ===");
  // Customer wants classic furniture
  const classicFactory = new ClassicFurnitureFactory();
  const classicStore = new FurnitureStore(classicFactory);
  classicStore.buyFurnitureSet();

  console.log("\n=== Individual Purchases ===");
  modernStore.buyChair();
  classicStore.buySofa();
}

runDemo();
