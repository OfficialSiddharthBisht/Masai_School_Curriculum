import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Bookings() {
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const navigate = useNavigate();
    const [allBookings, setAllBookings] = React.useState([]);

    const booked = async() => {
        try {
            let res =await fetch (`http://localhost:8080/moviesBooked`);
            let response = await res.json();
            setAllBookings(response);
        } catch (error) {
            console.log(error)
        }
    }

    const cancelBooking = async(id) => {
        try {
            await fetch(`http://localhost:8080/moviesBooked/${id}`, {
                method: "DELETE",
                });
            booked();
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=>{
        if(!isLoggedIn){
            navigate('/login');
        }
        else{
            booked();
        }
    },[])
    
  return (
    <div style={{textAlign:'center'}}>
        
             <div style={{textAlign:'center'}}>
                    <table>
                        <thead>
                            <tr>
                                <th>Movie Id</th>
                                <th>Name</th>
                                <th>Seat Number</th>
                                <th>Cancel Booking</th>
                            </tr>
                        </thead>
                        <tbody>
                    {allBookings?.map((movie, index)=> {
                        return (
                        <tr key={index}>
                        <td>{movie.movie_id}</td>
                        <td>{movie.name}</td>
                        <td>{movie.seat}</td>
                        <td><button onClick={()=>{cancelBooking(movie.id)}}>Cancel Booking</button></td>
                    </tr>)}
                    )}

                        </tbody>
                    </table>
                </div>
            
        
    </div>
  )
}

export default Bookings