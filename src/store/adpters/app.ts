import { Client } from "./client";
import { Product } from "./product";
import { Transaction } from "./transaction";

interface AppState {
  clients: Client[];
  products: Product[];
  transactions: Transaction[];
}

export interface AppStoreAdapter {
  app: AppState;
}
