// example code
function toggler(...arguments) {
    let count = 0;
    let arg = arguments;
    return function (){
        if(count === arg.length){
            count = 0;
        }
        return arg[count++];
    }
}

const toggle = toggler(1,2,3)

console.log(toggle());
// 1
console.log(toggle());
// 2
console.log(toggle());
// 3
console.log(toggle());
