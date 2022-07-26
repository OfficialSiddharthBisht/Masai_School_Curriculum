import React from "react";
import TodoInput from "./ToDoInput";
import { v4 as uuid } from 'uuid';
import TodoList from "./ToDoList";

export default function Todo () {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [showTodos, setShowTodos] = React.useState(true);
    const [page, setPage] = React.useState(1);
    
    const [lastPage, setLastPage] = React.useState();

    const getData = async () => {
        try {
            setLoading(true);
            let result = await fetch (`http://localhost:3000/task?_page=${page}&_limit=5`);
            let res = await result.json();
            setTodos(res);
            // console.log(result.headers.entries());
            for(var pair of result.headers.entries()){
                if(pair[0] === 'x-total-count'){
                    // console.log(pair[1]);
                    setLastPage(Math.ceil(pair[1]/5));
                }
            }
            // return res;
        } catch (error) {
            // console.log(error);
            setError(true);
            setTodos([]);
        }
        setLoading(false);
            
    }

    const handleAddTask = async (title) => {
        const payLoad = {
            id : uuid(),
            title : title,
            status : false
        }
        // console.log(payLoad);
        try {
            setLoading(true);
            await fetch(`http://localhost:3000/task`,{
                method :"POST",
                body : JSON.stringify(payLoad),
                headers : {"Content-Type" : "application/json"}
            });
            setError(false);
            getData();
        } catch (error) {
            // console.log(error);
            setError(true);
        }
        setLoading(false);
    }

    const handleToggle = async (itemId,itemStatus) => {
        // console.log(itemId)
        try {
            setLoading(true);
            let status = {
                status : (!itemStatus)
            }
            await fetch (`http://localhost:3000/task/${itemId}`,{
                method :"PATCH",
                body : JSON.stringify(status),
                headers : {"Content-Type" : "application/json"}
            });
            getData();
        } catch (error) {
            // console.log(error);
            setError(true);
        }
        setLoading(false);
    } 
    
    const handleDelete = async (itemId) => {
        try {
            setLoading(true);
            await fetch (`http://localhost:3000/task/${itemId}`,{
                method :"DELETE"
            });
            getData();
        } catch (error) {
            // console.log(error)
            setError(true);
        }
        setLoading(false);
    }
    
    // const filterShowingData = (showTodos) => {
    //     // getData();
    //     const updatedData = todos.filter(item => {
    //         return (!(item.status === showTodos))
    //     });
    //     setTodos(updatedData);
    // }

    React.useEffect(() => {
        getData();
        // console.log('CALLED');
    },[page]);
    // getData();
    return loading ? (
    <h1>Loading...</h1>
    ) : error ? (
        <h1>Error</h1>
    ) : (
        <>
        <h1>TODO BY REACT</h1>
        <TodoInput handleAddTask={handleAddTask} />
        <TodoList allTodos={todos} handleToggle={handleToggle} handleDelete={handleDelete} showTodos={showTodos}/>
        <button onClick={() => {setShowTodos(!showTodos)}}>{showTodos ? "Show Pending Todos" : "Show All Todos"}</button>
        {/* <button onClick={() => {getData()}}>Show All Todos</button> */}
        <div>
            <button onClick={()=>{setPage((page-1))}} disabled={page === 1}>PREV</button>
            <button onClick={()=>{setPage((page+1))}} disabled={page === lastPage}>NEXT</button>
        </div>
        </>
    )
}