import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productID === product.productID && item.selectedColor === product.selectedColor
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        console.log(`Updated quantity: ${updatedCart[existingProductIndex].quantity}`);
        return updatedCart;
      }
      console.log(`Adding new product: ${product.title}`);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productID, selectedColor) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => !(item.productID === productID && item.selectedColor === selectedColor)
      );
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;