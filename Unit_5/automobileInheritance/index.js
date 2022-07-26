//by create method

const automobile = {
    company : 'company name',
    numberOfWheels : 4,
    numberOfDoors : 4,
    maxSpeed : '140 km/h',
    airBags : true,
    spareWheel : true,
    gear : 'manual',
    sittingCapacity : 5
} 


const ford = Object.create(automobile);
ford.company='Ford';
ford.gear ='automatic';
// console.log(ford);
// console.log(ford.company);
// console.log(ford.gear);

// constructor functions

function Automobile (){
    this.company = 'company name',
    this.numberOfWheels = 4,
    this.numberOfDoors = 4,
    this.maxSpeed = '140 km/h',
    this.airBags = true,
    this.spareWheel = true,
    this.gear = 'manual',
    this.sittingCapacity = 5
}

const toyota = new Automobile();
console.log(toyota);
toyota.spareWheel=false;
console.log(toyota);