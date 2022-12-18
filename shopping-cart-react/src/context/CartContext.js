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

  const contextValue = {
    items: [],
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
