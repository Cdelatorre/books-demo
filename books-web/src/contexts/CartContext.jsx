import { createContext, useEffect, useState } from 'react';
import { getUserId } from '../utils/storage';
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [products, setProducts] = useState([])

  const addProduct = (product) => {
    setProducts((prev) => {
      return (
        [
          ...prev,
          product
        ]
      )
    })
  }

  return (
    <CartContext.Provider value={{ products, addProduct }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
