// furniture-factory.ts
import { Chair, Sofa, Table } from "./products";

export interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createTable(): Table;
}
