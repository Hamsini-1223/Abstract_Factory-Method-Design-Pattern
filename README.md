# Interactive Furniture Store - Abstract Factory Pattern

A TypeScript implementation of the Abstract Factory design pattern with an interactive console interface. This project demonstrates how to create families of related objects while ensuring consistency and maintainability.

![Abstract Factory UML Diagram](Abstract.png)

## Overview

This project implements a furniture store simulation where customers can purchase matching furniture sets. The Abstract Factory pattern ensures that all furniture pieces within a selected style (Modern, Classic, or Rustic) are consistent and work well together.

### Problem Solved

- Prevents mixing of incompatible furniture styles
- Ensures consistency within product families
- Allows easy addition of new furniture styles
- Maintains loose coupling between client code and concrete implementations

## Project Structure

```
├── products.ts              # Abstract product interfaces
├── modern-furniture.ts      # Modern style implementations
├── classic-furniture.ts     # Classic style implementations
├── rustic-furniture.ts      # Rustic style implementations
├── furniture-factory.ts     # Abstract factory interface
├── factories.ts             # Concrete factory implementations
├── client.ts                # Furniture store client
├── main.ts                  # Interactive console application
├── main-extended.ts         # Extended version with 3 styles
├── demo.ts                  # Non-interactive demonstration
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

```bash
git clone https://github.com/Hamsini-1223/Abstract_Factory-Method-Design-Pattern
cd Abstract-factory
npm install
```

## Usage

### Interactive Mode

```bash
npm start
```

Provides a console interface to choose furniture styles and make purchases.

### Extended Mode

```bash
npm run extended
```

Includes all three furniture styles and a comparison feature.

### Demo Mode

```bash
npm run demo
```

Non-interactive demonstration of the pattern.

## Output

### Interactive Mode Output

```
🏪 Welcome to the Furniture Store!
=================================

What would you like to do?
1. Choose furniture style
2. Buy complete furniture set
3. Buy individual furniture
4. Exit

Enter your choice (1-4): 1

🎨 Available Furniture Styles:
1. Modern (sleek, glass, leather)
2. Classic (wooden, fabric, traditional)

Choose style (1-2): 1
✅ You selected Modern style furniture!

What would you like to do?
1. Choose furniture style
2. Buy complete furniture set
3. Buy individual furniture
4. Exit

Enter your choice (1-4): 2

🛋️ Buying complete furniture set...
===================================
🪑 Sitting on a sleek modern chair
🛋️ Relaxing on a modern leather sofa
🪩 Placing item on a glass modern table
✅ Complete set purchased!
```

### Demo Mode Output

```
🏪 Furniture Store Demo
======================

=== Modern Furniture Set ===
🪑 Sitting on a sleek modern chair
🛋️ Relaxing on a modern leather sofa
🪩 Placing item on a glass modern table

=== Classic Furniture Set ===
🪑 Sitting on a wooden classic chair
🛋️ Relaxing on a fabric classic sofa
🪩 Placing item on a wooden classic table

=== Individual Purchases ===
🪑 Sitting on a sleek modern chair
✅ Chair purchased!
🛋️ Relaxing on a fabric classic sofa
✅ Sofa purchased!
```

### Extended Mode Output (Style Comparison)

```
🆚 Comparing All Furniture Styles:
==================================

--- Modern Style ---
🪑 Sitting on a sleek modern chair
🛋️ Relaxing on a modern leather sofa
🪩 Placing item on a glass modern table

--- Classic Style ---
🪑 Sitting on a wooden classic chair
🛋️ Relaxing on a fabric classic sofa
🪩 Placing item on a wooden classic table

--- Rustic Style ---
🪑 Sitting on a rough wooden rustic chair
🛋️ Relaxing on a log-frame rustic sofa
🪩 Placing item on a tree-trunk rustic table

✨ All styles maintain consistency within their family!
This demonstrates the Abstract Factory pattern benefit.
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

### Concrete Products

Each furniture style implements the abstract interfaces:

- **Modern**: Sleek, glass, and leather materials
- **Classic**: Traditional wooden and fabric designs
- **Rustic**: Natural wood and country-style aesthetics

### Abstract Factory

```typescript
export interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createTable(): Table;
}
```

### Concrete Factories

- `ModernFurnitureFactory`
- `ClassicFurnitureFactory`
- `RusticFurnitureFactory`

Each factory creates products that belong to the same style family.

## Example Usage

```typescript
// Create a factory for the desired style
const modernFactory = new ModernFurnitureFactory();

// Initialize the store with the factory
const store = new FurnitureStore(modernFactory);

// Purchase a complete matching set
store.buyFurnitureSet();
// Output: Modern chair, sofa, and table descriptions
```

## Adding New Furniture Styles

1. Create concrete product classes implementing the abstract interfaces
2. Create a concrete factory implementing `FurnitureFactory`
3. Add the new style to the UI menu (optional)

Example:

```typescript
export class IndustrialChair implements Chair {
  sitOn(): string {
    return "Sitting on a metal industrial chair";
  }
}

export class IndustrialFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new IndustrialChair();
  }
  // ... other methods
}
```

## Benefits

- **Consistency**: Guarantees matching furniture within a style
- **Extensibility**: New styles can be added without modifying existing code
- **Maintainability**: Clear separation of concerns
- **Type Safety**: TypeScript ensures correct implementations

## Design Principles

This implementation demonstrates several SOLID principles:

- **Single Responsibility**: Each class has one clear purpose
- **Open/Closed**: Open for extension, closed for modification
- **Dependency Inversion**: Client depends on abstractions, not concrete classes

## Requirements

- Node.js (version 14 or higher)
- TypeScript
- ts-node (for development)

## Development

```bash
# Build the project
npm run build

# Run type checking
tsc --noEmit

# Clean build artifacts
rm -rf dist/
```

## Built By

Ms Hamsini S
