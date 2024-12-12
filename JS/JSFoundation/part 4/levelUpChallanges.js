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


