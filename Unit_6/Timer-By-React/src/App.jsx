import './App.css';
import React from 'react';

function App() {
  const [time, setTime] = React.useState(0);
  const timeRef = React.useRef();
  // const fileInput = React.useRef();
  // const divRef = React.useRef();
  // {current : null}
  const [isRunning, setIsRunning] = React.useState(false);

  const startTimer = () => {
    if(isRunning){
      return;
    }
    timeRef.current = setInterval(()=>{
      setTime((prevTime)=> prevTime+1)},1000);
    setIsRunning(true)
  }

  const stopTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false)
  }

  // const handleSubmit = () => {
  //   console.log(fileInput.current.files[0]);
  //   // console.log(divRef)
    
  // }

  React.useEffect(()=>{
    startTimer();
    return stopTimer;
  },[])

  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>{time}</h2>
      <button onClick={startTimer} disabled={isRunning}>START</button>
      <button onClick={stopTimer} disabled={!isRunning}>STOP</button>
      <br />
      <br />
      {/* <div ref={divRef}>
        <input type="file" ref={fileInput}/>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div> */}

    </div>
  );
}

export default App;
