import navbar from '../components/navbar.js';

document.getElementById('navbarContainer').innerHTML = navbar();
// navbar();

let recipeUserData = JSON.parse(localStorage.getItem('recipeUserData')) || []; 
let auth = false;
let idx = -1;
localStorage.setItem('auth',JSON.stringify([auth,idx]));
document.querySelector('#userDetails').addEventListener('submit',() => {
    event.preventDefault();

    let user = {
        email : document.getElementById('userEmail').value,
        password : document.getElementById('userPassword').value,
    }

    recipeUserData.forEach((element, index) => {
        if(element.email == user.email && element.password == user.password){
            auth = true;
            idx = index;
        }
    });

    if(auth){
        alert('Login Successful');
        localStorage.setItem('auth',JSON.stringify([auth,idx]));
        window.location.href = './index.html';
    }
    else{
        alert('Invalid Details');
    }
// console.log(auth);
})
