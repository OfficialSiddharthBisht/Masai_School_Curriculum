import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
display: flex;
justify-content: space-evenly;
background: #fe8019;
color: black;
padding: 15px;
`;

const StyledLink = styled(Link)`
color: white;
font-weight:600;
text-decoration: none;
letter-spacing: 1px;
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/products">PRODUCTS</StyledLink>
        </NavbarWrapper>
    );
};

export default Navbar;