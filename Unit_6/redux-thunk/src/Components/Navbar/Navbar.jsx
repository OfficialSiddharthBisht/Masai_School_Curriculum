import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toogleAuth } from "../../Redux/Auth/action";

export const Navbar = () => {
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const handleLogout = () => {
    dispatch(toogleAuth());
    nevigate("/login");
  };

  return (
    <div className="navbar">
      {isAuth ? (
        <Link style={{ color: "blue" }} to="/dashboard">
          Dashboard
        </Link>
      ) : null}
      {!isAuth ? (
        <Link style={{ color: "blue" }} to="/registration">
          Registration
        </Link>
      ) : null}
      {!isAuth ? (
        <Link style={{ color: "blue" }} to="/login">
          Login
        </Link>
      ) : null}
      {isAuth ? (
        <button
          onClick={handleLogout}
          style={{
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
            backgroundColor: "white",
            color: "blue",
            fontSize: "16px"
          }}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
};
