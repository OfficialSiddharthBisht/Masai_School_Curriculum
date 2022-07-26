const Amar={
    name: 'Amar',
    location : 'Goa'
}
const Akbar={
    name : 'Akbar',
    location : 'Mumbai'
}
const Anthony={
    name : 'Anthony',
    location : 'Kashmir'
}

function cook(){
    console.log(this.name +" can Cook");
}
function sing(){
    console.log(this.name +" can Sing");
}
function magic(){
    console.log(this.name +" can do Magic");
}

cook.call(Amar);
cook.call(Anthony);
sing.call(Akbar);
sing.call(Anthony);
magic.call(Amar);
magic.call(Akbar);