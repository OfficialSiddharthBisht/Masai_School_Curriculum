import navbar from '../components/navbar.js';

document.getElementById('navbarContainer').innerHTML = navbar();
// navbar();


let recipeUserData = JSON.parse(localStorage.getItem('recipeUserData')) || []; 
document.querySelector('#userDetails').addEventListener('submit',() => {
    event.preventDefault();

    let user = {
        name : document.getElementById('userName').value,
        email : document.getElementById('userEmail').value,
        password : document.getElementById('userPassword').value,
        mobile : document.getElementById('userMobile').value
    }

    recipeUserData.push(user);
    localStorage.setItem('recipeUserData',JSON.stringify(recipeUserData));
    alert('Sign Up Successful\nLogin Now');
    window.location.href = './login.html';

})