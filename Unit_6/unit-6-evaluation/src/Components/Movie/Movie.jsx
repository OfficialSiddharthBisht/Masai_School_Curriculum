import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = React.useState({});
  const [booked, setBooked] = React.useState(false);
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [seat, setSeat] = React.useState("");

  const handleShowBooking = () => {
    navigate("/bookings");
  };

  const handleBook = async () => {
    try {
      if (name && seat) {
        let payload = {
          name: name,
          seat: seat,
          movie_id: id,
        };
        await fetch(`http://localhost:8080/moviesBooked`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        setBooked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMovie = async (id) => {
    try {
      let res = await fetch(`http://localhost:8080/movies/${id}`);
      let response = await res.json();
      setMovie(response);
    } catch (error) {
      console.log(error);
    }
  };

  const checkBooked = async (id) => {
    try {
      let res = await fetch(`http://localhost:8080/moviesBooked`);
      let response = await res.json();
      if (response.find((movie) => movie.movie_id == id)) {
        setBooked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // console.log(id);
    getMovie(id).then(() => {
      checkBooked(id);
    });
  },[id]);
  return (
    <div style={{border:'1px solid gray',margin:"auto", width:'350px',padding:'10px'}}>
      <img width={'100%'} src={movie.poster_path} alt="" />
      <h3>{movie.title}</h3>
      {!booked ? (
        <div>
          <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input type="text" placeholder="Enter Seat Number" value={seat} onChange={(e)=>{setSeat(e.target.value)}} />
        </div>
      ) : null}
      <br />
      {booked ? (
        <button onClick={handleShowBooking}>Show Booking Details</button>
      ) : (
        <button onClick={handleBook}>Book Tickets</button>
      )}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home Page
      </button>
    </div>
  );
}

export default Movie;
