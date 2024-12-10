// Primitives
// Number
let balance = 123;

console.log(balance); // 123
console.log(typeof balance); // number

// Boolean
let isActive = true;
console.log(isActive); // true
console.log(typeof isActive); // boolean

// null and undefined

let firstname = null;
let lastname = undefined; 
console.log(firstname); // null
console.log(lastname); // undefined

// String
let myString = "Omkar";
let myStringOne = 'Omkar';
let username = `Hello`;

let oldGreet = myString + "Omkar";
console.log(oldGreet); // OmkarOmkar

let greetMessage = `Hello ${myString}!`;
let demoOne = `Value is ${2+2}`;
console.log(greetMessage); // Hello Omkar!
console.log(demoOne); // Value is 4

// Symbol (guaruntees uniqueness)
let sm1 = Symbol("Omkar");
let sm2 = Symbol("Omkar");

console.log(sm1); //Symbol(Omkar)
console.log(sm2); //Symbol(Omkar)



