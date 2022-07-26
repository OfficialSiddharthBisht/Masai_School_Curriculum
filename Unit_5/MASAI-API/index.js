// API REGISTER

async function register(name,email,password,username,mobile,description){
    try {
        var result = await fetch ("http://masai-api-mocker.herokuapp.com/auth/register", {
            method : 'POST',
            body : JSON.stringify({
                name: name,
                email: email,
                password: password,
                username: username,
                mobile: mobile,
                description: description
            }),
            headers : { "Content-Type" : "application/json" }
        });
        var response = await result.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

register('Akash Kumawat','akashkmt963@gmail.com','AAaa@123','akashkmt963','9079938742','Working on API');

//-----------> register

//---->LOGIN API

async function login(username, password){
    try {
        var result = await fetch ("http://masai-api-mocker.herokuapp.com/auth/login", {
            method : 'POST',
            body : JSON.stringify({
                password: password,
                username: username,
            }),
            headers : { "Content-Type" : "application/json" }
        });
        var response = await result.json();
        console.log(response);
        profile(username, response.token);
        
    } catch (error) {
        console.log(error);
    }
}

login('akashkmt963', 'AAaa@123');

//-------> lOGIN


//------>Profile

async function profile(username, token){
    try {
        var result = await fetch (`http://masai-api-mocker.herokuapp.com/user/${username}`, {
            method : 'GET',
            headers : {'Authorization' : `Bearer ${token}`}
        });
        var response = await result.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}