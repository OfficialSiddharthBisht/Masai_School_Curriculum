import React from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Home = () => {
   const {isAuth} = React.useContext(AuthContext);
   const {products} = React.useContext(CartContext);

   const checkProduct = async(id) => {
     let data = await fetch(`http://localhost:8080/cartItems`);
     let res = await data.json();

     for(var i=0;i<res.length;i++){
      if((res[i]).productId == id){
         return true;
      }
     }
     return false;
   }
  return (
   isAuth ? (<div>
   {
      products.map(item => {
         let check = checkProduct(item.id);
         return (
            <div key={item.id}>
               <h2>{item.name}</h2>
               <p>{item.description}</p>
               <button disabled={!check}>Add To Cart</button>
            </div>
         )
      })
   }
  </div>
  ) : null )
};

export default Home;
