import React from "react";
import { LoginContext } from "../Context/LoginContext"; 
import { Box } from "@chakra-ui/react";


export default function Home() {
    const {user,isAuth} = React.useContext(LoginContext);
    return (
        <Box mt='5' as='h4' fontSize='25' fontWeight='semibold' color='gray' textAlign='center'>
            {
                isAuth ? `Welcome -- ${user.UserName}` : "WELCOME"
            }
        </Box>
    )
}