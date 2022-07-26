function MyArray() {
  Object.defineProperty(this, 'length', {
    enumerable: false,
    writable: true,
  });

  for (let index = 0; index < arguments.length; index++) {
    this[index] = arguments[index];
  }

  this.length = arguments.length;
}

MyArray.prototype.push = function (item) {
  let index = this.length;
  this[index] = item;
  this.length++;
};

MyArray.prototype.pop = function() {
    let index = this.length - 1;
    delete this[index];
    this.length--;
}

MyArray.prototype.top = function() {
    return this[this.length - 1];
}

MyArray.prototype.size = function() {
    return this.length;
}

MyArray.prototype.print = function() {
    // var output='';
    // for(var index=0 ; index<this.length ; index++){
    //   output+=(this[index])+" ";
    // }
    // console.log(output);
    var output=[];
    for(var index=0 ; index<this.length ; index++){
      output.push(this[index]);
    }
    console.log(output);
}

MyArray.prototype.printReverse = function() {
    var output='';
    for(var index=this.length-1 ; index>=0 ; index--){
      output+=(this[index])+" ";
    }
    console.log(output);
    // var output=[];
    // for(var index=this.length-1 ; index>=0 ; index--){
    //   output.push(this[index]);
    // }
    // console.log(output);
}

const arr = new MyArray(1, 2, 3);
// console.log(arr);
// arr.push(4);
// arr.pop();
// console.log(arr.top());
// console.log(arr.size());
// arr.print();
arr.printReverse();