import React from "react";
import { v4 as uuid } from "uuid";
// import { useToast } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon
  } from '@chakra-ui/react';
import {
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
//   const [showToast, setShowToast] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isError1 = name === '';
  const isError2 = email === '';
  const isError3 = password.length < 8;

  const [showError, setShowError] = React.useState(false);

  const navigation = useNavigate();

  const handleSubmit = () => {
    setShowError(false);
    setShowAlert(false);
    if (isError1 || isError2 || isError3) {
        setShowError(true);
        setTimeout(()=>{
            setShowError(false);
        }, 2000);
        return;
    }
    let payload = {
      id: uuid(),
      UserName: name,
      UserEmail: email,
      UserPassword: password,
      UserTasks: [],
    };
    // console.log(payload);
    postUserInDB(payload).then(() => { 
        // setShowToast(true);
        setShowAlert(true);
        }).then(()=>{
            setTimeout(() => { 
                setShowAlert(false);
                setEmail("");
                setPassword("");
                setName("");
                navigation("/login");
            }
            , 3000);
        });
  };

  return (
    <>
    <Stack width={400} margin="auto" mt={50}>
    {
        // showToast ? <ToastExample /> : null
        showAlert ? (<Alert status='success'><AlertIcon />Account Created Successfully</Alert>) : null
    }
    {
        showError ? (<Alert status='error'><AlertIcon />Fill all input fields</Alert>) : null
    }
      <FormControl isRequired>
      <FormLabel htmlFor='name'>Name</FormLabel>
      <Input
        id='name'
        type='text'
        placeholder="Enter Full Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      </FormControl>
      <FormControl isRequired>
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
       id="email"
       required
       type='email'
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      </FormControl>
      <FormControl isRequired>
      <FormLabel htmlFor='password'>Password</FormLabel>
      <InputGroup size="md">
        <Input
         id="password"
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
      {
        isError3 ? (<p style={{fontSize:'11px',fontWeight:'500',color:'red'}}>{`* Password should have at least 8 characters`}</p>) : null
      }
      
      </FormControl>
      <Box textAlign="right">
        <Button onClick={handleSubmit} width={150}>
          Submit
        </Button>
      </Box>
    </Stack>
    </>
  );
}

async function postUserInDB(payload) {
  try {
    await fetch("http://localhost:3001/UserData", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
};

// function ToastExample() {
//     const toast = useToast()
//     return (
      
//           toast({
//             title: 'Account created.',
//             description: "We've created your account for you.",
//             status: 'success',
//             duration: 3000,
//             isClosable: true,
//           })
//     )
//   }