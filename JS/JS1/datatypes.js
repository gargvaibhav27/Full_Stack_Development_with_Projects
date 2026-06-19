console.log("hello");
//other methods to print output in JavaScript include:
process.stdout.write("hello");
process.stdout.write("hello");
 // This method is used to write output to the standard output stream without adding a newline character at the end. It is commonly used in Node.js for more control over the output format.
//alert("hello"); // This method is used to display an alert dialog box with a specified message. It is commonly used in web browsers to show messages to users.

// Datatypes in JavaScript are used to represent different types of values. The main datatypes in JavaScript include:
/*
1. Primitive Datatypes: these are the basic datatypes that represent a single value. They include:
   - String: Represents a sequence of characters, enclosed in single or double quotes. Example: "Hello, world!"
   - Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
   - Boolean: Represents a logical value that can be either true or false. Example: true, false
   - Null: Represents the intentional absence of any object value. It is a primitive value that represents the null value. Example: null
   - Undefined: Represents an uninitialized variable or a variable that has not been assigned a value. Example: undefined
   - Symbol: Represents a unique identifier that can be used as a property key in objects. Example: Symbol("id")
   */

// 2. Non-Primitive Datatypes: these are more complex datatypes that can represent collections of values or objects. They include:
//    - Object: Represents a collection of key-value pairs, where the keys are strings and the values can be of any datatype, including other objects. Example: { name: "Alice", age: 30 }
//    - Array: Represents an ordered list of values, which can be of any datatype. Example: [1, 2, 3, "hello"]
//   - Function: Represents a reusable block of code that can be called with different arguments. Example: function greet(name) { return "Hello, " + name + "!"; }

// JavaScript is a dynamically typed language, which means that variables can hold values of any datatype and the type can change at runtime. This flexibility allows for easy and dynamic programming but also requires careful handling of datatypes to avoid errors.

// variables in JavaScript can hold values of any datatype, and the type can change at runtime. For example:
var x = 42; // x is a number
x = "hello"; // now x is a string
x = true; // now x is a boolean

// var and let are used to declare variables in JavaScript. var is function-scoped, while let is block-scoped. This means that variables declared with var are accessible throughout the entire function, while variables declared with let are only accessible within the block they are defined in. It is generally recommended to use let for variable declarations to avoid issues with variable hoisting and to improve code readability.

let score = 100; // score is a number.
let name = "chaicode"; // name is a string.
let isLoggedIn = true;
let getscore = score;
console.log(getscore);

// objects in JavaScript are collections of key-value pairs, where the keys are strings and the values can be of any datatype, including other objects. Objects are a fundamental part of JavaScript and are used to represent complex data structures and to create reusable code. You can create an object using object literal syntax, which involves enclosing key-value pairs in curly braces {}. For example:

let person = ["Alice", "Bob", "Charlie"];
let user = { name: "Alice", age: 30};

// keywords in JavaScript are reserved words that have a special meaning in the language and cannot be used as variable names, function names, or identifiers. Some examples of keywords in JavaScript include: if, else, for, while, function, return, var, let, const, and many more. It is important to avoid using keywords as variable names to prevent syntax errors and to ensure that your code is valid and runs correctly.
// var and let are keywords in JavaScript that are used to declare variables. var is function-scoped, while let is block-scoped.

console.log(user)