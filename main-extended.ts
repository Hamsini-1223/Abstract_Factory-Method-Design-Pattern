// main-extended.ts
// Extended version with Rustic furniture style
import * as readline from "readline";
import { FurnitureStore } from "./client";
import { ModernFurnitureFactory, ClassicFurnitureFactory } from "./factories";
import { RusticFurnitureFactory } from "./rustic-furniture";
import { FurnitureFactory } from "./furniture-factory";

class ExtendedFurnitureStore {
  private rl: readline.Interface;
  private store: FurnitureStore | null = null;
  private currentStyle: string = "";

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async start(): Promise<void> {
    console.log("🏪 Welcome to the Extended Furniture Store!");
    console.log("===========================================");
    console.log("Now featuring 3 furniture styles!");

    while (true) {
      await this.showMainMenu();
    }
  }

  private showMainMenu(): Promise<void> {
    return new Promise((resolve) => {
      console.log(`\nCurrent style: ${this.currentStyle || "None selected"}`);
      console.log("\nWhat would you like to do?");
      console.log("1. Choose furniture style");
      console.log("2. Buy complete furniture set");
      console.log("3. Buy individual furniture");
      console.log("4. Compare all styles");
      console.log("5. Exit");

      this.rl.question("Enter your choice (1-5): ", async (answer) => {
        switch (answer.trim()) {
          case "1":
            await this.chooseFurnitureStyle();
            break;
          case "2":
            await this.buyCompleteSet();
            break;
          case "3":
            await this.buyIndividualFurniture();
            break;
          case "4":
            await this.compareAllStyles();
            break;
          case "5":
            console.log("👋 Thank you for visiting our extended store!");
            this.rl.close();
            process.exit(0);
            break;
          default:
            console.log("❌ Invalid choice. Please enter 1-5.");
            break;
        }
        resolve();
      });
    });
  }

  private chooseFurnitureStyle(): Promise<void> {
    return new Promise((resolve) => {
      console.log("\n🎨 Available Furniture Styles:");
      console.log("1. Modern (sleek, glass, leather)");
      console.log("2. Classic (wooden, fabric, traditional)");
      console.log("3. Rustic (rough wood, natural, country style)");

      this.rl.question("Choose style (1-3): ", (answer) => {
        let factory: FurnitureFactory;
        let styleName: string;

        switch (answer.trim()) {
          case "1":
            factory = new ModernFurnitureFactory();
            styleName = "Modern";
            break;
          case "2":
            factory = new ClassicFurnitureFactory();
            styleName = "Classic";
            break;
          case "3":
            factory = new RusticFurnitureFactory();
            styleName = "Rustic";
            break;
          default:
            console.log("❌ Invalid choice. Defaulting to Modern style.");
            factory = new ModernFurnitureFactory();
            styleName = "Modern";
            break;
        }

        this.store = new FurnitureStore(factory);
        this.currentStyle = styleName;
        console.log(`✅ You selected ${styleName} style furniture!`);
        resolve();
      });
    });
  }

  private buyCompleteSet(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.store) {
        console.log("❌ Please choose a furniture style first!");
        resolve();
        return;
      }

      console.log(`\n🛋️ Buying complete ${this.currentStyle} furniture set...`);
      console.log("================================================");
      this.store.buyFurnitureSet();
      console.log("✅ Complete set purchased!");
      resolve();
    });
  }

  private buyIndividualFurniture(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.store) {
        console.log("❌ Please choose a furniture style first!");
        resolve();
        return;
      }

      console.log(`\n🪑 Individual ${this.currentStyle} Furniture Options:`);
      console.log("1. Chair");
      console.log("2. Sofa");
      console.log("3. Table");

      this.rl.question("What would you like to buy? (1-3): ", (answer) => {
        console.log("");
        switch (answer.trim()) {
          case "1":
            this.store!.buyChair();
            break;
          case "2":
            this.store!.buySofa();
            break;
          case "3":
            this.store!.buyTable();
            break;
          default:
            console.log("❌ Invalid choice.");
            break;
        }
        resolve();
      });
    });
  }

  private compareAllStyles(): Promise<void> {
    return new Promise((resolve) => {
      console.log("\n🆚 Comparing All Furniture Styles:");
      console.log("==================================");

      const factories = [
        { name: "Modern", factory: new ModernFurnitureFactory() },
        { name: "Classic", factory: new ClassicFurnitureFactory() },
        { name: "Rustic", factory: new RusticFurnitureFactory() },
      ];

      factories.forEach(({ name, factory }) => {
        console.log(`\n--- ${name} Style ---`);
        const tempStore = new FurnitureStore(factory);
        tempStore.buyFurnitureSet();
      });

      console.log("\n✨ All styles maintain consistency within their family!");
      console.log("This demonstrates the Abstract Factory pattern benefit.");
      resolve();
    });
  }
}

// Start the extended interactive store
async function main() {
  const extendedStore = new ExtendedFurnitureStore();
  await extendedStore.start();
}

main().catch(console.error);
