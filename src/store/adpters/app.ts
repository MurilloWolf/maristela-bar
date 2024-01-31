import { Client } from "./client";
import { Product } from "./product";
import { Transaction } from "./transaction";
import { ShoppingCart } from "./shoppingCart";

export type Hub = {
  products: Product[];
  clients: Client[];
  transactions: Transaction[];
  shoppingCart: ShoppingCart;
};

export type AppStore = {
  hub: Hub;
  //CLIENT
  createClient: (client: Client) => void;
  updateClient: (client: Client) => void;
  deleteClient: (client: Client) => void;

  //PRODUCT
  createProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
};
