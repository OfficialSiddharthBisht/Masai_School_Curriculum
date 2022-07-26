import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { toggleAuth } from '../../Redux/Login/action';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async(data) => {
        try {
            let res = await fetch (`https://reqres.in/api/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            let response = await res.json();
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(email, password);
        let data = {
            email: email,
            password: password
        }
        // console.log(data);
        login(data).then((res)=>{
            if(res.token){
                dispatch(toggleAuth());
                navigate('/');
            }
        });

    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <input type="submit" value='Login' />
        </form>
    </div>
  )
}

export default Login