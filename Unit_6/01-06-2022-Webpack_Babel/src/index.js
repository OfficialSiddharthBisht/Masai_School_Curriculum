import ("./index.css")
import add from "./addNote.js"
import image from "./logo.js"

let img = image();
document.getElementById('root').append(img);

let navBar = document.createElement('div');
navBar.setAttribute('id','navBar');

let textBar = document.createElement('input');
textBar.type = 'text';
textBar.placeholder = 'Enter Your Note';
textBar.setAttribute('id','inputBar');

let addBtn = document.createElement('button');
addBtn.innerText = 'Add Note';
addBtn.setAttribute('id','addBtn');

addBtn.addEventListener('click',add);

navBar.append(textBar,addBtn);

document.getElementById('root').append(navBar);