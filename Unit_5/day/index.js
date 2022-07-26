//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )
var scope={
    details : ["Types of Scope : 1. Global Scope, 2. Functional Scope, 3. Block Scope, 4. Lexical Scope.","Global Scope : We can access these scope variables anywhere we want in our code.","Functional Scope : We can access these scope variables only in that particular function.","Block Scope : We can access these kind of scopes only in block ('{----}').","Lexical Scope : Any thing that is happening around that particular scope comes in this scope."]
}

localStorage.setItem('scope',JSON.stringify(scope));

var hoisting={
    details : ["Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.","Hoisting allows functions to be safely used in code before they are declared.","Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.","'var' has the hoisting functionality. It hoist undefined value before initialization a variable.","'let' and 'const' don't have hoisting functionality"]
}

localStorage.setItem('hoisting',JSON.stringify(hoisting));

var constructorFunctions={
    details : ["The Constructor Function creates a new Function object.","Calling the constructor directly can create functions dynamically.","By this Constructor Function we can make a object again and again when we want without hard coding the main data.","Just simply pass the params in the constructor function and its done, it create that object dynamically."]
}

localStorage.setItem('constructorFunctions',JSON.stringify(constructorFunctions));

var prototype={
    details : ["Prototype is a base model of everything ie. Blueprint","It is a part of everything in JavaScript but not visible but we can use it's functions by simply calling their name.","Everything in JavaScript is an Object (OOPs Model) so everything has this prototype thing but hidden.","For accessing object we have to use dot notation ie. Object.constructor","When we print any object in console and then goes into it's deep then the prototype object is visible and we can access it's functionality by calling them."]
}

localStorage.setItem('prototype',JSON.stringify(prototype));


//Information should be retrieved from localstorage only, avoid hard coding data.

function scopeFn(){
    var scope=JSON.parse(localStorage.getItem('scope'));
    document.querySelector('#list').innerHTML='';
    document.querySelector('#video').innerHTML='';
    // console.log(scope)
    var uList=document.createElement('ul');
    uList.setAttribute('id','unorderedList');
    var head=document.createElement('h3');
    head.innerText='Scope';
    head.setAttribute('id','heading');
    // uList.append(head);
    scope.details.forEach(element => {
        var listData=document.createElement('li');
        listData.innerText=element;
        listData.setAttribute('class','listItems');
        uList.append(listData);
    });
    document.querySelector('#list').append(head, uList);
    var video=document.createElement('iframe');
    video.setAttribute('src','./scope.mp4')
    video.setAttribute('id','iVideo');
    document.querySelector('#video').append(video);

}
function hoistingFn(){
    var hoisting=JSON.parse(localStorage.getItem('hoisting'));
    document.querySelector('#list').innerHTML='';
    document.querySelector('#video').innerHTML='';
    // console.log(hoisting)
    var uList=document.createElement('ul');
    uList.setAttribute('id','unorderedList');
    var head=document.createElement('h3');
    head.innerText='Hoisting';
    head.setAttribute('id','heading');
    // uList.append(head);
    hoisting.details.forEach(element => {
        var listData=document.createElement('li');
        listData.innerText=element;
        listData.setAttribute('class','listItems');
        uList.append(listData);
    });
    document.querySelector('#list').append(head, uList);
    var video=document.createElement('iframe');
    video.setAttribute('src','./hoisting.mp4')
    video.setAttribute('id','iVideo');
    document.querySelector('#video').append(video);
}
function constructorFn(){
    var constructorFunctions=JSON.parse(localStorage.getItem('constructorFunctions'));
    document.querySelector('#list').innerHTML='';
    document.querySelector('#video').innerHTML='';
    // console.log(constructorFunctions)
    var uList=document.createElement('ul');
    uList.setAttribute('id','unorderedList');
    var head=document.createElement('h3');
    head.innerText='Constructor Functions';
    head.setAttribute('id','heading');
    // uList.append(head);
    constructorFunctions.details.forEach(element => {
        var listData=document.createElement('li');
        listData.innerText=element;
        listData.setAttribute('class','listItems');
        uList.append(listData);
    });
    document.querySelector('#list').append(head, uList);
    var video=document.createElement('iframe');
    video.setAttribute('src','./constructorFunctions.mp4')
    video.setAttribute('id','iVideo');
    document.querySelector('#video').append(video);
}
function prototypeFn(){
    var prototype=JSON.parse(localStorage.getItem('prototype'));
    document.querySelector('#list').innerHTML='';
    document.querySelector('#video').innerHTML='';
    // console.log(prototype)
    var uList=document.createElement('ul');
    uList.setAttribute('id','unorderedList');
    var head=document.createElement('h3');
    head.innerText='Prototype';
    head.setAttribute('id','heading');
    // uList.append(head);
    prototype.details.forEach(element => {
        var listData=document.createElement('li');
        listData.innerText=element;
        listData.setAttribute('class','listItems');
        uList.append(listData);
    });
    document.querySelector('#list').append(head, uList);
    var video=document.createElement('iframe');
    video.setAttribute('src','./prototype.mp4')
    video.setAttribute('id','iVideo');
    document.querySelector('#video').append(video);
}