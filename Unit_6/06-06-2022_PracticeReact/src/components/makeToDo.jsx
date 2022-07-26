import React from "react";

export default function ToDo ({todo}){
    return (
        <h2 style={todo.status === true ?{color:'green'}:{color:'red'}}>{todo.title}</h2>
    )
}