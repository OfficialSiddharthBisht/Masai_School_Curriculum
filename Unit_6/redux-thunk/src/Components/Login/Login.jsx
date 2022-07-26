import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toogleAuth } from "../../Redux/Auth/action";

export const Login = () => {
  const [status, setStatus] = React.useState("");
  const [formData, setFormData] = React.useState({
    password: "",
    username: ""
  });

  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const { password, username } = formData;
  const login = async (formData) => {
    try {
      let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" }
        }
      );
      let result = await res.json();
      // console.log(result);
      if (result.token) {
        setFormData({
          password: "",
          username: ""
        });
        dispatch(toogleAuth());
        nevigate("/dashboard");
      } else {
        setStatus(result.message);
      }
    } catch (error) {
      // console.log("ERROR", error);
      setStatus("Invalid login creadentials");
    }
  };

  const handlInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    login(formData);
  };
  return (
    <div>
      {status ? <h3>{status}</h3> : null}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          textAlign: "left",
          margin: "auto",
          gap: "3px",
          border: "1px solid gray",
          padding: "10px"
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handlInput}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlInput}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

// https://masai-api-mocker.herokuapp.com/auth/login
