import './App.css';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import { gapi } from 'gapi-script';
import React from 'react';

function App() {

  React.useEffect(() => {
    function start() {
    gapi.client.init({
    clientId:"710886247396-gjud2poi8gggqnmjj9v507uomrour86n.apps.googleusercontent.com",
    scope: 'email',
      });
       }
      gapi.load('client:auth2', start);
       }, []);
  return (
    <div className="App">
      <GoogleLogin
        clientId="710886247396-gjud2poi8gggqnmjj9v507uomrour86n.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />

    <GoogleLogout
    clientId={"710886247396-gjud2poi8gggqnmjj9v507uomrour86n.apps.googleusercontent.com"}

    onLogoutSuccess={onLogoutSuccess}

      />
    </div>
  );
}

export default App;

const onSuccess = response => {
  console.log('SUCCESS', response.tokenId);
   };
  const onFailure = response => {
    console.log('FAILED', response);
    };
   const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
     };