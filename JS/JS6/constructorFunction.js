// function greet(name){
//     console.log("Hello, ", name);
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
}
// here we are creating an object using the constructor function
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);
//console.log(person1);
//console.log(person2);

function Car(make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new Car("Toyota", "Camry");
// console.log(myCar);
// here we are creating another object using the same constructor function. new keyword is used to create a new instance of the Car constructor function. without new keyword, the function will not create a new object and will not work as expected. it will return undefined.
let myNewCar = new Car("Tata", "Safari");
//console.log(myNewCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
//console.log(lemonTea.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
//console.log(dog.sound());
let cat = new Animal("Cat");
//console.log(cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Must use the new keyword to create an instance of Drink");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");// this will throw an error because we are not using the new keyword to create an instance of Drink.