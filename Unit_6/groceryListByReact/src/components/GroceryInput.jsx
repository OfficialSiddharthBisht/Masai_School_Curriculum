import React from "react";

export default function GroceryInput ({handleUpdate}) {
    const [title, setTitle] = React.useState("");
    return(
        <div>
            <input type="text" placeholder="Enter Grocery Item" onChange={(event)=> {setTitle(event.target.value)}} value={title}/>
            <button onClick={() => handleUpdate(title)}>ADD</button>
        </div>
    )
}