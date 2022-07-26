import navbar from '../components/navbar.js';

document.getElementById('navbarContainer').innerHTML = navbar();
// navbar();

let recipeUser = JSON.parse(localStorage.getItem('auth'));
let recipeUserData = JSON.parse(localStorage.getItem('recipeUserData'));

if(recipeUser[0]){
    let user = recipeUserData[recipeUser[1]];
    // console.log(user);
    showUser(user);
}

function showUser(userData){
    var div = document.createElement('div');
    div.setAttribute('id','userDataDiv');

    var head = document.createElement('h3');
    head.innerText = 'User Details'

    var name = document.createElement('p');
    name.innerText ='Name : ' + userData.name;

    var email = document.createElement('p');
    email.innerText = 'Email : ' + userData.email;

    var mobile = document.createElement('p');
    mobile.innerText = 'Mobile : ' + userData.mobile;

    div.append(head, name, email, mobile);
    document.getElementById('main').append(div);

}