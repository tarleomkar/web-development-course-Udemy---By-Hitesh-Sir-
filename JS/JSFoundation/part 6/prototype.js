// older way
let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: computer,
};

let tomHardware = {};

// console.log(`computer `, computer.__proto__); // computer  [Object: null prototype] {} (dunder proto dunder : __proto__)

// console.log(`lenovo`, lenovo.__proto__); // lenovo { cpu: 12 }

// 2. new way
let genericCar = {tyres: 4};

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
// console.log(`tesla `, tesla.tyres);

console.log(`tesla `, Object.getPrototypeOf(tesla)); // tesla  { tyres: 4 }

