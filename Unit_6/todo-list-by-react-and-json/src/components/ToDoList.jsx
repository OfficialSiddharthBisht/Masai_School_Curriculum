import React from "react";


export default function TodoList ({allTodos, handleToggle, handleDelete,showTodos}) {

    return(
        <>
        {
            allTodos.map((item) => {
                if(showTodos){
                    return (
                        <div className="listItem" key={item.id}>
                            <h4 style = { !item.status ? {color : "red"} : {color : "green"}}>{item.title}</h4>
                            <button onClick={() => {handleToggle(item.id, item.status)}}>T</button>
                            <button onClick={() => {handleDelete(item.id)}}>DELETE</button>
                        </div>
                    )
                }
                else{
                    if(item.status === false){
                        return (
                            <div className="listItem" key={item.id}>
                                <h4 style = { !item.status ? {color : "red"} : {color : "green"}}>{item.title}</h4>
                                <button onClick={() => {handleToggle(item.id, item.status)}}>T</button>
                                <button onClick={() => {handleDelete(item.id)}}>DELETE</button>
                            </div>
                        )
                    }
                }
            })
        }
        </>
    )
}