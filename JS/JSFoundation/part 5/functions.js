/*
1. Write a function named `makeTea` that takes one parameter, `TypeOfTea`, and returns a string like
`"Making green tea"` when called with `"green tea"`.
Store the result in an varialbe named `teaOrder`.
*/

/*
function makeTea(TypeOfTea) {
    return `Making ${TypeOfTea}`;
}

let teaOrder = makeTea("lemon tea");
console.log(teaOrder);
*/

/*
2. Create a function named `orderTea` that takes one paramter, `teaType`. Inside this function, create another function named `ConfirmedOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmedOrder` from within `orderTea` and return the result
*/

/*
function orderTea(teaTypes) {
    function ConfirmedOrder() {
        return `Order Confirmed for ${teaTypes}`;
    }
    return ConfirmedOrder();
}

let ConfirmedOrder = orderTea('chai');
console.log(ConfirmedOrder);
*/

/*
3. Write an arrow function named `calculateTotal` that takes two paramters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a varialbe named `totalCost`
*/
/*
// let calculateTotal = (price, quantity) => {
//     return price * quantity;
// }
// or implcit return is like follows
let calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(20, 5);
console.log(totalCost);
*/

/*
4.
Write a function named `processTeaOrder` that takes another function, `makeTea`, as a paramter and calls it with the argument `"earl greay"`.
Return the result of calling `makeTea`.
// Simple callback buddy
*/
/*
function makeTea(TypeOfTea) {
    return `maketea: ${TypeOfTea}`
}

function processTeaOrder(teaFunction) {
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);
console.log(order);
*/

/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one paramter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
/*
function createTeaMaker(name) {
    let score = 100; // A variable defined in the parent function's scope
    return function (teaType) {
        // This is the inner function that uses variables from the parent function
        return `Making ${teaType} ${name} ${score}`;
    };
}

let teaMaker = createTeaMaker("Omkar"); // Creates a tea maker for "Omkar"
let result = teaMaker("green tea"); // Calls the inner function
console.log(result); // Prints the result

// This behaviour called as clousers

*/

function stringToNumber(input) {
    let number = Number(input);
    if (isNaN(number)) {
        return "Not a number";
    }
    return number;
}

console.log(stringToNumber(60));
