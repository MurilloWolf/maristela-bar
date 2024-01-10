import { Client } from "./client";
import { Product } from "./product";

export interface Transaction {
  id: string;
  client: Client;
  product: Product[];
  total: number;
  date: string;
}
