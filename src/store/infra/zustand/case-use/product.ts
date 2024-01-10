import { v4 as uuidv4 } from "uuid";
const ProductsUseCases = (set, get) => ({
  createProduct: (product) => {
    set((state) => ({
      hub: {
        ...state.hub,
        products: [...state.hub.products, { ...product, id: uuidv4() }],
      },
    }));
  },
  updateProduct: (product) => {
    set((state) => ({
      hub: {
        ...state.hub,
        products: state.hub.product.map((p) => {
          if (p.id === product.id) {
            return product;
          }
          return p;
        }),
      },
    }));
  },
  deleteProduct: (product) => {
    set((state) => ({
      hub: {
        ...state.hub,
        products: state.hub.products.filter((p) => p.id !== product.id),
      },
    }));
  },
});
export default ProductsUseCases;
