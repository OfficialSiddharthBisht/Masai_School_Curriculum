import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Button, BeatLoader } from '@chakra-ui/react';

export default function ShowUser () {
    const { tokenNumber } = React.useContext(AuthContext);
    const  { isAuth } = React.useContext(AuthContext);
    const  { loading } = React.useContext(AuthContext);

    return(
        loading ? (<Box textAlign='center'><Button isLoading ></Button></Box>) : (isAuth ? (<Box p={4} textAlign='center' >{`Token Number : ${tokenNumber} - Login Status : ${isAuth}`}</Box>) : (<Box p={4} textAlign='center' >{`Login Status : ${isAuth}`}</Box>))
    )
}

// (<Box p={4} textAlign='center' >Loading...</Box>)