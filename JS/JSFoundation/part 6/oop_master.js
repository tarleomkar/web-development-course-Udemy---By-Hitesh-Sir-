let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2021,
    start: function() {
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start());

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 20)
// console.log(john.name);


function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function() {
    return `${this.type} makes a sound`;
}

Array.prototype.omkar = function() {
    return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.omkar());
let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.omkar());

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.make} is a car from ${this.make}`;
    }
}

// Inhertiace
class Car extends Vehicle {
    drive() {
        return `${this.make}: This is an inheritance example`;
    }
}


let myCar = new Car("Mahindra", "3XO AX5");
// console.log(myCar.start());
// console.log(myCar.drive());


let vehOne = new Vehicle("Tata", "Curv");
console.log(vehOne.make);
