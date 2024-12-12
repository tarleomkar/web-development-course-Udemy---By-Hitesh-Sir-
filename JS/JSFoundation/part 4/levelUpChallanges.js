/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "Chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
Stores all teas before `"Chai"`.
Store all teas before `"chai"` in a new array named `selectedTeas` (need to use Break)
*/
/*
const teas = ["green tea", "black tea", "Chai", "oolong tea"];
const selectedTeas = [];

for (let i = 0;i < teas.length; i++) {
    if (teas[i] === 'Chai') {
        break;
    }
    selectedTeas.push(teas[i]);
}
// console.log(selectedTeas); // [ 'green tea', 'black tea' ]
*/

/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
Store the other cities in an new array named `visitedCities`. (Need to use Continue)
*/
/*
const cities = ["London", "New York", "Paris", "Berlin"];
const visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === 'Paris') {
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log(visitedCities);
*/

/*
3. Use a `for-of` loop to itearate through the array `[1, 2, 3, 4, 5]` and stops when the number `4` is found.
store the numbers before `4` in an array named `smallNumbers`.
*/
/*
const numbers = [1, 2, 3, 4, 5];
const smallNumbers = [];

for (const nums of numbers) {
    if (nums === 4) {
        break;
    }
    smallNumbers.push(nums)
}
console.log(smallNumbers);
*/

/*
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `herbal tea`.
Store the other teas in an array named `preferredTeas`.
*/
/*
const teas = ["chai", "green tea", "herbal tea", "black tea"];
const preferredTeas = [];

for (const tea of teas) {
    if (tea === 'herbal tea') {
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);
*/

/*
5. Use a `for-in` loop to loop through an object contaning city poulations.
Stop the loop when the population of `"Berlin"` is found and store all previous cities populations in a new object named `cityNewPopulations`.

let citiesPopulation = {
London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

*/
/*
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};

// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) {
    // console.log(citiesPopulation[city]);
    
    if (city === "Berlin") {
        break;
    }
    // key = value
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations); // { London: 8900000, 'New York': 8400000 }
*/

/*
6. Use a `for-in` loop to loop through an object contatning city populations.
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
"Sydeny": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
*/
/*
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
  };
  
  let largeCities = {};
  
  for (let city in worldCities) {
    if (worldCities[city] >= 3000000) {
      largeCities[city] = worldCities[city];
    }
  }
  
  console.log(largeCities); // Output: { Sydney: 5000000, Tokyo: 9000000, Berlin: 3500000 }
  */

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
Stop the loop when `"chai"` is found, and store all previous tea types in an array named `avaialableTeas`.
*/
/*
const arr = ["earl grey", "grren tea", "chai", "oolong tea"];
const availableTeas = [];
let stopLoop = false;  // Flag to control when to stop adding teas

arr.forEach(function (item) {
    if (stopLoop) return;  // Stop adding teas when the flag is true
    
    if (item === "chai") {
        stopLoop = true;  // Set the flag to true when "chai" is found
    } else {
        availableTeas.push(item);  // Otherwise, add the tea to the availableTeas array
    }
});

console.log(availableTeas); // [ 'earl grey', 'grren tea' ]
*/

/*
8. Write a ForEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in a new array named traveledCities.
*/
/*
const cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
const traveledCities = [];

cities.forEach(function (city) {
    if (city === 'Sydney') {
        return;
    }
    traveledCities.push(city);
});

console.log(traveledCities); // [ 'Berlin', 'Tokyo', 'Paris' ]
*/

/*
9. Write a `for` loop that iterates through the array [2, 5, 7, 9]`.
Skip the value `7` and multiply the rest by 2.
Store the results in a new array named `doubledNumbers`.
*/
/*
let arr = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        continue;
    }
    else {
        doubledNumbers.push(arr[i] * 2);
    }
}

console.log(doubledNumbers); // [ 4, 10, 18 ]
*/

/*
10. Use for-of loop to iterates through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named shortTeas.
*/

let teaTypes = ["chai", "khatrnaak tea", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (let tea of teaTypes) {
    if(tea.length > 10) {
        continue;
    }
    else {
        shortTeas.push(tea)
    }
}
console.log(shortTeas); // [ 'chai', 'green tea', 'black tea', 'herbal tea' ]
