import React, { createContext, useState } from "react";

export const Cartcontext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addToCart = (item) => {
  setCart(prev => {
    const existingItem = prev.find(i => i.id === item.id);
    if (existingItem) {
      return prev.map(i =>
        i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      );
    } else {
      return [...prev, { ...item, quantity: 1 }];
    }
  });
};


  const removeFromcart = (itemToRemove) => {
    setCart(prev => prev.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <Cartcontext.Provider value={{ cart, addToCart, removeFromcart }}>
      {children}
      
    </Cartcontext.Provider>
  );
};

export default CartProvider;
