// Abstraction
class coffeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`
    }

    brewCoffe() {
        // complex calculation
        return `Brewing coffe`;
    }

    pressStartButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffe();
        return `${msgone} + ${msgtwo}`;
    }
}

let myMachine = new coffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
console.log(myMachine.pressStartButton());


