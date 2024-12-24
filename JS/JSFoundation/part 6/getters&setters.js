class Employee {
    #salary;

    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `You are not allowed to see salary`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid salary");
        }
        else {
            this.salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000);
console.log(emp.salary);
emp.salary = 60000;
