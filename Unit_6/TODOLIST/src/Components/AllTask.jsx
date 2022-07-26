import React from "react";
import { LoginContext } from "../Context/LoginContext";

export default function AllTask() {
    const {user,isAuth} = React.useContext(LoginContext);
    return (
        isAuth ? (
            user.UserTasks?.map(item =>{
            console.log(item);
        })
        ) : <h1>Please Login</h1>
    )
}