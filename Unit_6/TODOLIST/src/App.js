import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import AllTask from './Components/AllTask';
import AddTask from './Components/AddTask';
import NotFound from './Components/NotFound';
import {ChakraProvider} from '@chakra-ui/react';
import Signup from './Components/Signup';

function App() {
  return (
    <ChakraProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/alltask" element={ <AllTask /> } />
      <Route path="/addtask" element={ <AddTask /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
