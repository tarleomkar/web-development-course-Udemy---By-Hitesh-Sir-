// static methods: called by class itself nobody else can call it. 
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// error
// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// directly using class
console.log(Calculator.add(2, 3)); // 5

