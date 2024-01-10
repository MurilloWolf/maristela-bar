import { create } from "zustand";
import ClientsUseCases from "./case-use/client";
import ProductUseCases from "./case-use/product";

export const useStore = create((set, get) => ({
  hub: {
    products: [],
    clients: [],
    transactions: [],
  },
  ...ClientsUseCases(set, get),
  ...ProductUseCases(set, get),
}));
