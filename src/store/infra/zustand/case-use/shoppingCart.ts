const ShoppingCartUseCases = (set, get) => ({
  addToCart: (product) => {
    return set((state) => {
      const productInCart = state.hub.shoppingCart.find(
        (p) => p.id === product.id
      );
      const quantityInStock = state.hub.products.find(
        (p) => p.id === product.id
      ).quantity;

      if (quantityInStock <= 0) {
        return state;
      }

      if (productInCart) {
        return {
          hub: {
            ...state.hub,
            // remove quantity from stock
            products: state.hub.products.map((p) => {
              if (p.id === product.id) {
                return {
                  ...p,
                  quantity: p.quantity - productInCart.quantity,
                };
              }
              return p;
            }),
            // add quantity to shopping cart
            shoppingCart: state.hub.shoppingCart.map((p) => {
              if (p.id === product.id) {
                return {
                  ...p,
                  quantity: p.quantity + product.quantity,
                };
              }
              return p;
            }),
          },
        };
      }
      return {
        hub: {
          ...state.hub,
          // remove quantity from stock
          products: state.hub.products.map((p) => {
            if (p.id === product.id) {
              return {
                ...p,
                quantity: p.quantity - productInCart.quantity,
              };
            }
            return p;
          }),
          // add quantity to shopping cart
          shoppingCart: [...state.hub.shoppingCart, product],
        },
      };
    }, "addToCart");
  },
});

export default ShoppingCartUseCases;
