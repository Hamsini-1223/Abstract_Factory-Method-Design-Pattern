// src/factories/furnitureFactory.ts

import { Chair, Sofa, Table } from "../models/productInterfaces";

export interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createTable(): Table;
}
