import { StateCreator, create } from "zustand";

import ClientsUseCases from "./case-use/client";
import ProductUseCases from "./case-use/product";
// import ShoppingCartUseCases from "./case-use/shoppingCart";
import products from "@/store/mocks/products";
import clients from "@/store/mocks/clients";

import { AppStore } from "@/store/adpters/app";

export const AppStoreCreator: StateCreator<AppStore> = (set, get) => ({
  hub: {
    products: [...products],
    clients: [...clients],
    transactions: [],
    shoppingCart: {
      items: [],
      client: null,
      total: 0,
    },
  },
  ...ClientsUseCases(set, get),
  ...ProductUseCases(set, get),
  // ...ShoppingCartUseCases(set, get),
});

export const useStore = create(AppStoreCreator);
