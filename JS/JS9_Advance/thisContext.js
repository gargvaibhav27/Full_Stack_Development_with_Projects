const person = {
  name: "Ryan",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

// other then bind method we can also use call and apply methods to change the context of this keyword in JavaScript. The call method takes the context as the first argument and the rest of the arguments are passed as individual arguments. The apply method takes the context as the first argument and the rest of the arguments are passed as an array.

const newgreetFunction = person.greet.call({ name: "Janie" });

const newgreetFunction2 = person.greet.apply({ name: "Janie" });

const newgreetFunction3 = person.greet.call({ name: "Jon" });