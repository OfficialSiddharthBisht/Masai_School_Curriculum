import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = React.useState(0);
  const [products, setProducts] =React.useState([]);

  const allproducts = async()=>{
    let data = await fetch(`http://localhost:8080/products`);
    let res = await data.json();
    setProducts(res);
 }

 const getCart = async() => {
  let data = await fetch(`http://localhost:8080/cartItems`);
    let res = await data.json();
    let allCart = res.reduce((prev,cur)=>{
      return prev + cur.count;
    },0);
    setCartCount(allCart);
 }

 React.useEffect(()=>{
  allproducts();
  getCart();
 },[]);

  const handleCart = (value) => {
    setCartCount(cartCount + value);
  }
  return <CartContext.Provider value={{cartCount, handleCart, products, getCart}}>{children}</CartContext.Provider>;
};
