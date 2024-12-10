// objects
let username = {
    firstname: "Omkar",
    "is LoggedIn": true
};

username.firstname = "Mr. H";
username.lastname = "Nana";

console.log(username.firstname);
console.log(username.lastname);
console.log(["is LoggedIn"]);

console.log(typeof username);



let today = new Date();
console.log(today.getDate() + today.getMonth() + today.getFullYear());

// Array
let otherUser = ["Hitesh", "Sir", true];

console.log("Hello");
// console.log(otherUser[1]); // Sir

// implicit type conversions (not best in any language exception use Typescript)
console.log(1 + "1"); // 11
console.log("1" + 1); // 11

let isValue = true;
isValue += 1
console.log(isValue);


