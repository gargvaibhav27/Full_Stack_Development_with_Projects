// Prototypal Inheritance in JavaScript, every object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype. The Object.prototype is on the top of the prototype chain. All JavaScript objects inherit from Object.prototype.

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} `);
}

let person1 = new Person("Paul", 21 );
person1.greet();