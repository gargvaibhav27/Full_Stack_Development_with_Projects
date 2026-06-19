// Primitives in JavaScript are the most basic data types that are not objects and do not have methods. They include:
// 1.Number
let balance = 1000;
// console.log(typeof balance);
// typeof operator is used to determine the type of a variable or value in JavaScript. It returns a string that indicates the type of the operand. In this case, it will return "number" because balance is a numeric value.
let anotherBalance = new Number(1000);
// new Number() is a constructor function that creates a Number object. It is generally not recommended to use the Number constructor to create numeric values, as it can lead to unexpected behavior and performance issues. Instead, it is better to use numeric literals (e.g., 1000) or the Number() function without the new keyword (e.g., Number(1000)) to convert values to numbers.
// console.log(anotherBalance.valueOf   ()); // This will return the primitive value of the Number object, which is 1000. The valueOf() method is used to retrieve the primitive value of an object, and in this case, it will return the numeric value stored in the anotherBalance object.
// objects created with the Number constructor are not the same as primitive numbers. They are objects that wrap around a primitive number value. This can lead to unexpected behavior when comparing them with primitive numbers or when using certain operators. For example:
// console.log(balance == anotherBalance); // This will return true because the == operator performs type coercion and compares the primitive value of anotherBalance with balance.
// console.log(balance === anotherBalance); // This will return false because the === operator does not perform type coercion and compares both the type and value, and in this case, they are different (number vs object).
// console.log(typeof anotherBalance);
// This will return "object" because anotherBalance is a Number object, not a primitive number.

// 2.Boolean
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended to use Boolean constructor to create boolean values, as it can lead to unexpected behavior and performance issues.

// 3.Null and Undefined
let firstname;
// console.log(firstname);
// This will return undefined because the variable firstname has been declared but has not been assigned a value. In JavaScript, when a variable is declared but not initialized, it is automatically assigned the value undefined. This indicates that the variable exists but does not have a defined value yet.
let lastname = null;
// console.log(lastname);
// This will return null because the variable lastname has been explicitly assigned the value null. In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should not have any value or that an object reference is intentionally empty.
let firstname2 = undefined;
// console.log(firstname2);
// This will return undefined because the variable firstname2 has been explicitly assigned the value undefined. In JavaScript, undefined is a primitive value that represents an uninitialized variable or a variable that has not been assigned a value. It is often used to indicate that a variable is not yet defined or that a function does not return a value.

// 4.String
// ways to create strings in JavaScript:
let myString = "Hello, world!";
let anotherString = 'Hello, world!';
let templateString = `Hello, world!`;
// In JavaScript, you can create strings using double quotes (" "), single quotes (' '), or backticks (` `). Each of these methods allows you to define a string literal, and they can be used interchangeably based on your preference or the need for including certain characters without escaping them. For example, using single quotes allows you to include double quotes in the string without needing to escape them, and using backticks allows for multi-line strings and string interpolation.
// console.log(myString);
// console.log(anotherString);
// console.log(templateString);
// This will print the value of myString, anotherString, and templateString to the console, which is "Hello, world!" for each of them. All three variables contain the same string value, just created using different methods.
let oldgreet = myString + "How are you?";
// console.log(oldgreet);
// This will concatenate the string " How are you?" to the end of myString, resulting in "Hello, world! How are you?".
let oldgreet1 = myString + " " + " How are you?";
// console.log(oldgreet1);
let newgreet = `${myString} How are you?`;
// console.log(newgreet);
// This will also concatenate the string " How are you?" to the end of myString using template literals, resulting in "Hello, world! How are you?". Template literals allow for easier string interpolation and multi-line strings compared to traditional string concatenation.
// $ is used in template literals to indicate that an expression should be evaluated and included in the resulting string. In this case, ${myString} will be replaced with the value of myString, which is "Hello, world!", resulting in the final string "Hello, world! How are you?"
let demoone = `value is ${2 * 3}`;
// console.log(demoone);

// 5.Symbol
let sym1 = Symbol();
let sym2 = Symbol();
// console.log(sym1==sym2); // This will return false because each call to Symbol() creates a unique symbol, even if they have the same description. In JavaScript, symbols are guaranteed to be unique, so sym1 and sym2 are different symbols, and therefore they are not equal when compared with the == operator.
// console.log(sym1===sym2); // This will also return false for the same reason as above. The === operator checks for both type and value, and since sym1 and sym2 are different symbols, they are not strictly equal either.
// console.log(typeof sym1); // This will return "symbol" because sym1 is a symbol datatype in JavaScript. The typeof operator returns the type of the operand, and in this case, it indicates that sym1 is of type "symbol".
let sym11 = Symbol("id");
let sym22 = Symbol("id");
console.log(sym11==sym22);// This will also return false because even though sym11 and sym22 have the same description ("id"), they are still unique symbols. In JavaScript, each call to Symbol() creates a new, unique symbol, regardless of the description provided. Therefore, sym11 and sym22 are different symbols and are not equal when compared with the == operator.
console.log(sym11===sym22); // This will also return false for the same reason as above. The === operator checks for both type and value, and since sym11 and sym22 are different symbols, they are not strictly equal either.
