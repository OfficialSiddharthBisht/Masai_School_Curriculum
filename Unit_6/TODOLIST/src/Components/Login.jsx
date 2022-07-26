import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { LoginContext } from "../Context/LoginContext"; 

const StyledLink = styled(Link)`
  color: blue;
  padding-left: 5px;
  padding-top: 5px;
`;

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showError, setShowError] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const error1 = email === "";
  const error2 = password === "";
  const navigation = useNavigate();

  const {login} = React.useContext(LoginContext);

  const handleLogin = () => {
    setShowError(false);
    setShowAlert(false);
    if (error1 || error2) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
      return;
    }
    let payload = {
      UserEmail: email,
      UserPassword: password,
    };

    login(payload).then((res)=>{
      // console.log(user,isAuth);
      if(res){
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigation("/");
        }, 1500);
      }
      else{
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      }
    });
  };

  return (
    <Stack width={400} margin="auto" mt={50}>
      {showError ? (
        <Alert status="error">
          <AlertIcon />
          Invalid Credentials
        </Alert>
      ) : null}
      { showAlert ? (
        <Alert status="success">
          <AlertIcon />
          Login Successful
        </Alert>
      ) : null}
      <Input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputRightElement width={55}>
          <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
        </InputRightElement>
      </InputGroup>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <StyledLink to="/signup">Create an account</StyledLink>
        <Button onClick={handleLogin} width={150}>
          Login
        </Button>
      </Box>
    </Stack>
  );
}
