function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model)  {
    this.make = make;
    this.model = model;
}

// creating obj / instance
let myCar = new Car("Toyota", "Fortuner Legender");
// console.log(myCar);

let myNewCar = new Car("Tata", "Curv");
// console.log(myNewCar);


function Tea(type) {
    this.type =  type;
    this.func = function() {
        return `This is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.func());


function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
// console.log(dog.sound()); // Dog makes a sound

let cat = new Animal("Cat");
// console.log((cat.sound())); // Cat makes a sound

function Drink(name) {
    if(!new.target) {
        throw new Error("Drink must me called with new keyword!");
    }
    this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");