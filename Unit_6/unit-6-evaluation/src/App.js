import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Bookings from './Components/Bookings/Bookings';
import Movie from './Components/Movie/Movie';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/bookings' element={<Bookings/>} />
        <Route path='/movie/:id' element={<Movie/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
