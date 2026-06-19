//function in JS is a block of code that can be called and executed when needed. It allows you to encapsulate logic and reuse it throughout your code. Functions can take parameters, perform operations, and return values. In JavaScript, functions can be defined using the `function` keyword or as arrow functions. They can also be assigned to variables, passed as arguments to other functions, and returned from functions. Functions help in organizing code, improving readability, and promoting code reusability. 

function greet(name){
    console.log(`hello ${name}`);
}
greet("vaibhav")
// here we are defining a function named `greet` that takes one parameter, `name`. Inside the function, we use `console.log` to print a greeting message that includes the provided name. We then call the function with the argument `"vaibhav"`, which results in the output: "hello vaibhav".


/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);

// here we are defining a function named `makeTea` that takes one parameter, `typeOfTea`. Inside the function, we return a string that includes the provided type of tea. We then call the function with the argument `"lemon tea"` and store the result in the variable `teaOrder`. Finally, we print the value of `teaOrder`, which will output: "Making lemon tea".

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
     return confirmOrder() // for execution.
    //confirmOrder // for reference.
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);
//here we are defining a function named `orderTea` that takes one parameter, `teaType`. Inside this function, we define another function named `confirmOrder` that returns a confirmation message. We then call `confirmOrder` from within `orderTea` and return the result. Finally, we call `orderTea` with the argument `"chai"` and store the result in the variable `orderConfirmation`, which will output: "Order confirmed for chai".

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
/* ways to create function:
1. function greet () {}   //normal function
2. const greet = () => {} //arrow function
*/
const calculateTotal = (price, quantity) => {
    return price * quantity ;
}
// const calculateTotal = (price, quantity) => price * quantity; // other way to write
let totalCost = calculateTotal(499, 100);
console.log(totalCost);
// This: is used for context. 
// Here we are defining an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. Inside the function, we return the total cost by multiplying the `price` and `quantity`. We then call the function with the arguments `499` and `100`, and store the result in the variable `totalCost`. Finally, we print the value of `totalCost`, which will output: 49900.

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}
let order = processTeaOrder(makeTea)
console.log(order);
// here we are defining a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter. Inside `processTeaOrder`, we call the `makeTea` function with the argument `"earl grey"` and return the result. We then call `processTeaOrder` with the `makeTea` function as an argument and store the result in the variable `order`. Finally, we print the value of `order`, which will output: "maketea: earl grey". here we are using the concept of higher-order functions, where a function can take another function as an argument and execute it.

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);