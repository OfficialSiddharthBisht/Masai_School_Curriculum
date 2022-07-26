import React from "react";


export default function GroceryInput ({handleAddTask}) {
    const [enteredInput, setEnteredInput] = React.useState("");
    // console.log(enteredInput);
    return(
        <div>
            <input type="text" value={enteredInput} onChange={(event)=>{setEnteredInput(event.target.value)}}/>
            <button onClick={() => {handleAddTask(enteredInput); setEnteredInput("")}}>ADD</button>
        </div>
    )
}