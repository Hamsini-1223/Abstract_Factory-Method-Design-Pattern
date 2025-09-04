# Interactive Furniture Store - Abstract Factory Pattern

A simple TypeScript implementation of the Abstract Factory design pattern with an interactive console interface.

## Overview

This project implements a furniture store where customers can purchase matching furniture sets. The Abstract Factory pattern ensures that all furniture pieces within a selected style are consistent.

## Project Structure

```
├── asset/
|   └── Abstract.png
├── src/
│   ├── models/
│   │   └── productInterfaces.ts    # Product interfaces
│   ├── products/
│   │   ├── modernFurniture.ts      # Modern implementations
│   │   ├── classicFurniture.ts     # Classic implementations
│   │   └── rusticFurniture.ts      # Rustic implementations
│   ├── factories/
│   │   ├── furnitureFactory.ts     # Abstract factory
│   │   └── concreteFactories.ts    # Concrete factories
│   ├── client/
│   │   └── furnitureStore.ts       # Store client
│   └── ui/
│       ├── interactiveStore.ts     # Interactive interface
│       └── demo.ts                 # Demo version
├── main.ts                         # Entry point
├── package.json
└── tsconfig.json
```

## UML Class Diagram

![Abstract Factory UML Diagram](asset/Abstract.png)

## Installation

```bash
git clone https://github.com/Hamsini-1223/Abstract_Factory-Method-Design-Pattern.git
cd furniture-abstract-factory
npm install
```

## Usage

```bash
# Interactive mode
npm start

# Demo mode
npm run demo
```

## Pattern Implementation

### Abstract Products

```typescript
export interface Chair {
  sitOn(): string;
}

export interface Sofa {
  lieOn(): string;
}

export interface Table {
  putItem(): string;
}
```

### Concrete Factories

- `ModernFurnitureFactory` - Creates modern style furniture
- `ClassicFurnitureFactory` - Creates classic style furniture
- `RusticFurnitureFactory` - Creates rustic style furniture

## Example Usage

```typescript
const modernFactory = new ModernFurnitureFactory();
const store = new FurnitureStore(modernFactory);
store.buyFurnitureSet();
```

## Output

### Interactive Mode Output

```
Welcome to the Furniture Store!
==============================

What would you like to do?
1. Choose furniture style
2. Buy complete furniture set
3. Buy individual furniture
4. Exit

Enter your choice (1-4): 1

Available Furniture Styles:
1. Modern (sleek, glass, leather)
2. Classic (wooden, fabric, traditional)
3. Rustic (rough wood, natural, country style)

Choose style (1-3): 1
You selected Modern style furniture!

What would you like to do?
1. Choose furniture style
2. Buy complete furniture set
3. Buy individual furniture
4. Exit

Enter your choice (1-4): 2

Buying complete furniture set...
================================
Chair: Sitting on a sleek modern chair
Sofa: Relaxing on a modern leather sofa
Table: Placing item on a glass modern table
Complete set purchased!
```

### Demo Mode Output

```
Furniture Store Demo
===================

=== Modern Furniture Set ===
Chair: Sitting on a sleek modern chair
Sofa: Relaxing on a modern leather sofa
Table: Placing item on a glass modern table

=== Classic Furniture Set ===
Chair: Sitting on a wooden classic chair
Sofa: Relaxing on a fabric classic sofa
Table: Placing item on a wooden classic table

=== Rustic Furniture Set ===
Chair: Sitting on a rough wooden rustic chair
Sofa: Relaxing on a log-frame rustic sofa
Table: Placing item on a tree-trunk rustic table

=== Individual Purchases ===
Chair: Sitting on a sleek modern chair
Chair purchased!
Sofa: Relaxing on a fabric classic sofa
Sofa purchased!
Table: Placing item on a tree-trunk rustic table
Table purchased!

Demo completed!
```

## Built By

Ms Hamsini S
