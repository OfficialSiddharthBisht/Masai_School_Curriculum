import React from "react";

export default function Profile({profileData}){
    const [age, setAge] = React.useState(profileData.age);

    function handleIncrement(){
        setAge((age+1));
    }
    function handleDecrement(){
        setAge((age-1));
    }
    function hideMore(){
        document.getElementById('moreDetailsDiv').style.display='none';
        document.getElementById('displayMoreBtn').style.display='block';
        document.getElementById('hideMoreBtn').style.display='none';
    }
    function displayMore(){
        document.getElementById('moreDetailsDiv').style.display='block';
        document.getElementById('displayMoreBtn').style.display='none';
        document.getElementById('hideMoreBtn').style.display='block';
    }
    
    return (
        <>
            <img src={profileData.image} alt="img" />
            <h2>{`Name : ${profileData.name}`}</h2>
            <h2>{`Age : ${age}`}</h2>
            <div style={{textAlign:'center'}}>
                <button onClick={handleIncrement}>INCREASE AGE</button>
                <button onClick={handleDecrement}>DECREASE AGE</button>
            </div>
            <div className="moreBtnsDiv" style={{marginTop:"10px"}}>
                <button id="displayMoreBtn" onClick={displayMore}>SHOW MORE DETAILS</button>
                <button id="hideMoreBtn" onClick={hideMore}>HIDE MORE DETAILS</button>
            </div>
            <div id="moreDetailsDiv">
                <h2>{`Location : ${profileData.location}`}</h2>
                <h2>{`Organization : ${profileData.organization}`}</h2>
            </div>
        </>
    )
}