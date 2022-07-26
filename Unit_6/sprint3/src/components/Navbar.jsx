import React from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"

const Navbar = () => {

  const { isAuth, handleAuth } = React.useContext(AuthContext);
  const { cartCount, handleCart } = React.useContext(CartContext);

  return <div style={{gap:'50px', display:'flex', justifyContent:'center'}}>
    {
      isAuth ? <Link to="/home">Home</Link> : <p style={{margin:'auto', marginRight:0,marginLeft:0}}>Home</p>
    }
    {
      isAuth ? <p style={{margin:'auto', marginRight:0,marginLeft:0}}>Cart : {cartCount}</p> : null
    }
    {
      isAuth ? <button onClick={handleAuth}>Logout</button> : <Link to="/">Login</Link>
    }
    </div>;
};

export default Navbar;
