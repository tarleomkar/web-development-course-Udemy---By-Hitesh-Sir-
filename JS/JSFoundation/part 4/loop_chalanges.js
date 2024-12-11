/*
1. Write a 'while' loop that calculates the summ of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
// 1 + 2 + 3 + 4 + 5 = 15
/*
let sum = 0;
let i = 1;  

while (i <= 5) {
    sum += i;
    i++;
}
// console.log(sum); // 15
*/

/* 
2. write a `while` loop that countss down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = []
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
// console.log(countdown); // [ 5, 4, 3, 2, 1 ]

/*
3. Write a 'do while' loop that prompts a user to enter thier favorite tea type until they enter `'stop'`.
Store each tea type in array named `teaCollection`.
*/

/*
// Initialize the tea collection array
const teaCollection = [];

let teaType; // Variable to store user input

do {
  // Prompt the user for their favorite tea type
  teaType = prompt("Enter your favorite tea type (or type 'stop' to finish):");
  
  // If the user enters something other than 'stop', add it to the array
  if (teaType !== 'stop') {
    teaCollection.push(teaType);
  }
} while (teaType !== 'stop'); // Continue until 'stop' is entered

// Log the collected tea types
// console.log("Your tea collection:", teaCollection);
*/

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
/*
let total = 0;
let i = 1;

do {
    total += i;
    i++;
}while(i<=3);

console.log(total);
*/

/*
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

/*
const numbers = [2, 4, 6];
const multipliedNumbers = [];

for (i=0; i<numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * 2);
}
console.log(multipliedNumbers); // [ 4, 8, 12 ]
*/

/* 
6. write a `for` loop that lists all the cities in the array. `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

const cities = ["Paris", "New York", "Tokyo", "London"];
const cityList = [];

for (let i = 0; i < cities.length; i++) {
    const myCity = cities[i];
    cityList.push(myCity);
}
console.log(cityList); // [ 'Paris', 'New York', 'Tokyo', 'London' ]



