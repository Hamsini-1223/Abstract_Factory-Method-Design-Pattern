// main.ts

import { InteractiveStore } from "./src/ui/interactiveStore";

async function main() {
  try {
    const store = new InteractiveStore();
    await store.start();
  } catch (error) {
    console.error("Error starting application:", error);
    process.exit(1);
  }
}

main();
