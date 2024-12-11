/*
Decalare an array named 'teaFalvors' that contains the strings "green tea", "black tea", and "oolong tea".
Access the first element of the array and store it in a variable named 'firstTea'.
*/

const teaFalvors = ['green tea', 'black tea', 'oolong tea'];

const firstTea = teaFalvors[0];
// console.log(firstTea); // green tea

/*
2. Declare an array names 'cities' containng `"London"`, `"Tokyo"`, `"Paris"` and `"New York"`.
Access the third element in anrray and store it in a variable named 'favoriteCity'.
*/
const cities = ['London', 'Tokyo', 'Paris', 'New York'];

const favoriteCity = cities[2];
// console.log(favoriteCity); // Paris

/*
You have an array named 'teaTypes' containg `"herbal tea"`, `"white tea"`, `"masala chai"`.
Change the second element of the array to `"jasmie tea"`.
*/

const teaTypes = ['herbal tea', 'white tea', 'masala chai'];
const newTypesSecond = teaTypes[1] = 'jasmie tea';
// console.log(newTypesSecond); // jasmie tea
// console.log(teaTypes); // [ 'herbal tea', 'jasmie tea', 'masala chai' ]

/*
4. Decalres an array named `citeisVisited` containng `"Mumbai"` and `"Sydney"`.
Add `"Berlin"` to the array using the 'push' method.
*/
const citeisVisited = ['Mumbai', 'Sydney'];
citeisVisited.push("Berlin");
// console.log(citeisVisited); // [ 'Mumbai', 'Sydney', 'Berlin' ]

/*
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"` and `"earl grey"`.
Remove the last element of the array using the `pop` method ans store it in a variable named `lastorder`.
*/
const teaOrders = ['Chai', 'iced tea', 'matcha', 'earl grey'];
teaOrders.pop();
// console.log(teaOrders); // [ 'Chai', 'iced tea', 'matcha' ]

/*
6. You have an array named 'popularTeas' contaning `"green tea"`, `"oolong tea"` and `"chai"`.
Create a soft copy of this array named `softCopyTeas`.
*/
const popularTeas = ['grren tea', 'oolong tea', 'chai'];
const softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(softCopyTeas); // [ 'grren tea', 'oolong tea' ]
// console.log(popularTeas); // [ 'grren tea', 'oolong tea' ]

/*
You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
Create a hard copy of this array named `hardCopyCities`.
*/
const topCities = ['Berlin', 'Singapore', 'New York'];
// 1. Using spread operator
// const hardCopyCities = [...topCities];

// 2. using slice method
const hardCopyCities = topCities.slice();
topCities.pop();

// console.log(hardCopyCities); // [ 'Berlin', 'Singapore', 'New York' ]
// console.log(topCities); // [ 'Berlin', 'Singapore' ]

/*
8. You have two arrays: 'europeanCities' contaning `"Paris"` and `"Rome"` and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
Merge theses two arrays into a new array named `worldCities`.
*/
const europeanCities = ['Paris', 'Rome'];
const asianCities = ['Tokyo', 'Bangkok'];

// const worldCities = [...europeanCities, ...asianCities];
// using concat method
const worldCities = europeanCities.concat(asianCities) 

// console.log(worldCities); // [ 'Paris', 'Rome', 'Tokyo', 'Bangkok' ]

/*
9. You  have an array named `teaMenu` containg `"masala chai"`, `"oolong tea"` , `"green tea"`, and `"earl grey"`.
Find the length of the array ans tore it in a varialve named `menuLength`.
*/
const teaMenu = ['masala chai', 'oolong tea', 'green tea', 'earl grey'];

const menuLength = teaMenu.length;
// console.log(menuLength);

/*
10. You have an array named `cityBucketList` contaning `"Kyoto"`, `"London"`, `"Cape Town"` and `"Vancouver"`.
Check if  'London' is in the array and store the result in a variable named `isLondonInList`.
*/
const cityBucketList = ['Kyoto', 'London', 'Cape Town', 'Vancouver'];

const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

