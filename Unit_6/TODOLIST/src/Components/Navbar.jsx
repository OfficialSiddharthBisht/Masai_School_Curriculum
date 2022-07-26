import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { LoginContext } from "../Context/LoginContext"; 

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
`;

const StyledButton = styled.button`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Roboto", sans-serif;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    `;

export default function Navbar() {
    const {isAuth,setIsAuth,setUser} = React.useContext(LoginContext);
    const handleLogout = () => {
        setIsAuth(false);
        setUser(null);
    }
    return (
        <Box bg='#ebb0b6' p={4}>
            <NavbarContainer>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/alltask">All Tasks</StyledLink>
              <StyledLink to="/addtask">Add Task</StyledLink>
              {
                !isAuth ? (<StyledLink to="/login">Login</StyledLink>) : (<StyledButton onClick={handleLogout}>Logout</StyledButton>)
              }
            </NavbarContainer>
        </Box>
    )
}