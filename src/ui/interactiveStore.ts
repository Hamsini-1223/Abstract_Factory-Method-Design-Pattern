// src/ui/interactiveStore.ts

import * as readline from "readline";
import { FurnitureStore } from "../client/furnitureStore";
import {
  ModernFurnitureFactory,
  ClassicFurnitureFactory,
  RusticFurnitureFactory,
} from "../factories/concreteFactories";
import { FurnitureFactory } from "../factories/furnitureFactory";

export class InteractiveStore {
  private rl: readline.Interface;
  private store: FurnitureStore | null = null;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async start(): Promise<void> {
    console.log("Welcome to the Furniture Store!");
    console.log("==============================");

    while (true) {
      await this.showMainMenu();
    }
  }

  private showMainMenu(): Promise<void> {
    return new Promise((resolve) => {
      console.log("\nWhat would you like to do?");
      console.log("1. Choose furniture style");
      console.log("2. Buy complete furniture set");
      console.log("3. Buy individual furniture");
      console.log("4. Exit");

      this.rl.question("Enter your choice (1-4): ", async (answer) => {
        try {
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
              console.log("Thank you for visiting our store!");
              this.rl.close();
              process.exit(0);
              break;
            default:
              console.log("Invalid choice. Please enter 1-4.");
              break;
          }
        } catch (error) {
          console.error("Error:", error);
        }
        resolve();
      });
    });
  }

  private chooseFurnitureStyle(): Promise<void> {
    return new Promise((resolve) => {
      console.log("\nAvailable Furniture Styles:");
      console.log("1. Modern (sleek, glass, leather)");
      console.log("2. Classic (wooden, fabric, traditional)");
      console.log("3. Rustic (rough wood, natural, country style)");

      this.rl.question("Choose style (1-3): ", (answer) => {
        try {
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
              console.log("Invalid choice. Defaulting to Modern style.");
              factory = new ModernFurnitureFactory();
              styleName = "Modern";
              break;
          }

          this.store = new FurnitureStore(factory);
          console.log(`You selected ${styleName} style furniture!`);
        } catch (error) {
          console.error("Error choosing style:", error);
        }
        resolve();
      });
    });
  }

  private buyCompleteSet(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.store) {
        console.log("Please choose a furniture style first!");
        resolve();
        return;
      }

      console.log("\nBuying complete furniture set...");
      console.log("================================");
      this.store.buyFurnitureSet();
      console.log("Complete set purchased!");
      resolve();
    });
  }

  private buyIndividualFurniture(): Promise<void> {
    return new Promise((resolve) => {
      if (!this.store) {
        console.log("Please choose a furniture style first!");
        resolve();
        return;
      }

      console.log("\nIndividual Furniture Options:");
      console.log("1. Chair");
      console.log("2. Sofa");
      console.log("3. Table");

      this.rl.question("What would you like to buy? (1-3): ", (answer) => {
        try {
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
              console.log("Invalid choice.");
              break;
          }
        } catch (error) {
          console.error("Error buying furniture:", error);
        }
        resolve();
      });
    });
  }
}
