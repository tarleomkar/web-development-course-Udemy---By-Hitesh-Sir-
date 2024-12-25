// function Person(name, age) {
//     if (age <= 0 || typeof age !== "number") {
//         throw new Error("AAge must be a positive number..");
//     }
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     return `Hello, my name is ${this.name}`;
// }

// try {
//     const person1 = new Person("Omkar", 21);
//     console.log(person1.greet());
// } catch(error) {
//     console.error(error.message)
// }

// Filter only numbers from a mixed array
function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");
}

// Reverse an array
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Find the maximum value in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Remove duplicate elements from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Flatten a nested array into a single-level array
function flattenArray(arr) {
    return arr.flat(Infinity); // Use Infinity to flatten deeply nested arrays
}

// Example usage
const mixedArray = [1, "hello", 3, true, 5, "world", {}, 8];
const numberArray = [9, 3, 4, 5, 1];
const nestedArray = [1, [2, [3, [4, 5]]]];

console.log("Filtered Numbers:", filterNumbers(mixedArray)); // [1, 3, 5, 8]
console.log("Reversed Array:", reverseArray(numberArray));    // [1, 5, 4, 3, 9]
console.log("Maximum Value:", findMax(numberArray));          // 9
console.log("Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log("Flattened Array:", flattenArray(nestedArray));   // [1, 2, 3, 4, 5]
