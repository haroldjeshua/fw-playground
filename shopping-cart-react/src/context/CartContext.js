import { createContext, useState } from "react";
import { productsArray } from "../productStore";

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // [{ id: 1, quantity: 2}]

  function getProductQuantity(id) {
    cartProducts.find((product) => product.id === id)?.quantity;
    // undefined.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  const contextValue = {
    items: [cartProducts],
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return <CartProvider value={contextValue}>{children}</CartProvider>;
}

// Context (cart, addToCart, removeCart)
// Provider -> gives app access to all the things in your context
