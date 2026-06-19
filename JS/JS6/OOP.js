// class, object and inheritance in JavaScript

// class is a blueprint for creating objects. it defines the properties and methods that an object can have. it is a template for creating objects. it is not an object itself. it is a function that is used to create objects. it is a special type of function that is used to create objects. it is a syntactical sugar over the constructor function.

// object is an instance of a class. it is a collection of properties and methods that are defined in the class. it is created using the new keyword. it is an instance of a class. it is created using the new keyword. it is an instance of a class. it is created using the new keyword.

// inheritance is a mechanism where one class can inherit the properties and methods of another class. it allows us to create a new class that is based on an existing class. it allows us to reuse the code of the existing class. it allows us to create a new class that is based on an existing class.

// polymorphism is a mechanism where one class can have multiple forms. it allows us to create a new class that is based on an existing class. it allows us to reuse the code of the existing class. it allows us to create a new class that is based on an existing class.

// encapsulation is a mechanism where we can hide the internal details of an object and only expose the necessary details. it allows us to protect the data of an object from outside interference. it allows us to hide the internal details of an object and only expose the necessary details.

// abstraction is a mechanism where we can hide the complexity of an object and only expose the necessary details. it allows us to focus on what an object does instead of how it does it. it allows us to hide the complexity of an object and only expose the necessary details.

let car = {
    make: "Toyota",
    model: "Camry",
    year: "2020",
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    }
};
//console.log(car.start());

// Inheritance: 

class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }
}
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}
let myCar = new Car("Toyota", "Corolla")
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla")
console.log(vehOne.make);

//Encapsulation:

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}
let account = new BankAccount();
console.log(account.getBalance());

// Abstraction
class CoffeMachine{
    start(){
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee(){
        // complex calculation
        return `Brewing Coffee`;
    }
    pressStartButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} + ${msgtwo}`;
    }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// Ploymorphism
class Bird{
    fly() {
        return `Flying...`;
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// static method
class Calculator{
    static add(a,b){
        return a+b
    }
}
//let miniCalc = new Calculator();
//console.log(miniCalc.add(2,3));
//console.log(Calculator.add(2,3));

//Getters and Setters

// class Employee{
//     #salary;
//     constructor(name, salary){
//         if(salary<0){
//             throw new Error("Salary cannot be in negative");
//         }
//         this.name = name;
//         this.#salary= salary;
//     }
//     get salary(){
//         return `you are not allowed to see the salary`;
//     }
//     set salary(value){
//         if(value<0){
//             console.error("Invalid Salary");
//         }else{
//             this._salary = value;
//         }
//     }
// }
// let emp = new Employee("Alice", -50000);
// console.log(emp._salary);
// emp.salary = 60000;
