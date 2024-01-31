import { Client } from "./client";
import { Product } from "./product";

export interface ShoppingCart {
  items: Product[];
  client: Client | null;
  total: number;
}
