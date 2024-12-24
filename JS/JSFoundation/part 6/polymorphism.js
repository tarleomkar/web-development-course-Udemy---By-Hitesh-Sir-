// polymorphism
class Bird {
    fly() {
        return `Flying...`
    }
}

class Penguine extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

let bird = new Bird();
let penguin = new Penguine();
console.log(bird.fly());
console.log(penguin.fly());
