import React from "react";
import { Button, Box } from '@chakra-ui/react';
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
    const  { isAuth } = React.useContext(AuthContext);
    const  { callApi } = React.useContext(AuthContext);
    const  { toggleIsAuth } = React.useContext(AuthContext);
    
    return(
        <Box bg='tomato' w='100%' p={4} textAlign='right' >
            {
                isAuth ? <Button onClick={() => {toggleIsAuth()}} >Logout</Button> : <Button onClick={() => {callApi()}} >Login</Button>
            }
        </Box>
    )
}

export default NavBar