import React from "react";
import { v4 as uuid } from "uuid";
import { LoginContext } from "../Context/LoginContext";
import { Input, Button, Box, Alert, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react'


export default function AddTask() {
    const [task, setTask] = React.useState("");
    const [added, setAdded] = React.useState(false);
    const { user, isAuth, maintainUserData } = React.useContext(LoginContext);

    const onClose = () => {
        setAdded(false);
    }

    const handleAddTask = async () => {
        // setAdded(true);
        if (task === "" || !isAuth ) {
            return;
        }
        let payload = {
            id: uuid(),
            Task: task,
            Status: false
        }
        try {
            setAdded(true);
            let UserTasks = [...(user.UserTasks), payload];
            // console.log(UserTasks);
            await fetch(`http://localhost:3001/UserData/${user.id}`,{
                method: "PATCH",
                body: JSON.stringify({UserTasks : UserTasks}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            await maintainUserData(user.id);
            setTask("");
        } catch (error) {
            console.log(error)
        }
        setTimeout(()=>{
            setAdded(false);
        },1000);
    //    console.log(payload);
    }
    return (
        <Box width={500} margin='auto' mt={5}>
            {
                added ? (
                    <Alert status='success' display='flex' justifyContent='space-between'>
                        <Box display='flex'>
                            <AlertIcon />
                            <AlertTitle>Task Added Successfully</AlertTitle>
                        </Box>
                        <CloseButton onClick={onClose} />
                    </Alert>
                ) : null
            }
            {
                !isAuth ? (
                    <Alert status='error' >
                            <AlertIcon />
                            <AlertTitle>Please Login First</AlertTitle>
                    </Alert>
                ) : null
            }
        <Box display='flex' m='auto' mt={3} width={500}>
            <Input placeholder="Enter Task Details" type='text' value={task} onChange={(e) => {setTask(e.target.value)}} />
            <Button onClick={handleAddTask}>Add Task</Button>
        </Box>
        </Box>
    )
}