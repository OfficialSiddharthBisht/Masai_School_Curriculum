import React from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleAuth } = React.useContext(AuthContext);
  const home = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'eve.holt@reqres.in' && password === 'cityslicka'){
       handleAuth();
      // <Navigate to="/home" />
      home('/home');
    }
  }

  return <div>
    <form style={{marginTop:'20px'}} onSubmit={handleSubmit}>
      <label>Email : <input type="email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} /></label>
      <label>Password : <input type="text" value={password} onChange={(e)=>{ setPassword(e.target.value)}} /> <input type="submit" /></label>
    </form> 
  </div>;
};

export default Login;
