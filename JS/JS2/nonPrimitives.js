// Non-Primitive Data Types in JavaScript
// Non-primitive datatypes in JavaScript are more complex data structures that can represent collections of values or objects.
// 1. Objects: Objects are collections of key-value pairs, where each key is a string and the value can be of any data type. Objects can represent real-world entities and can have properties and methods. For example:
// let username = {firstname: "Hani", lastname: "Garg", isLoggedIn: true};
const username = {firstname: "Hani", lastname: "Garg", isLoggedIn: true};
console.log(username);
// In this example, we have created an object called username with three properties: firstname, lastname, and isLoggedIn. The object is a non-primitive data type because it can hold multiple values and has a more complex structure compared to primitive data types like strings or numbers. We can access the properties of the object using dot notation (e.g., username.firstname) or bracket notation (e.g., username["firstname"]).
// console.log(typeof username);

// console.log(username.firstname);
// This will print the value of the firstname property of the username object, which is "Hani". We can access the properties of an object using dot notation or bracket notation, and in this case, we are using dot notation to retrieve the value of the firstname property.

username.firstname = "Vaibhav";
// console.log(username.firstname);
// This will update the value of the firstname property of the username object to "Vaibhav". Even though we declared username as a const, we can still modify the properties of the object it references. The const declaration prevents reassignment of the variable itself, but it does not make the object immutable. Therefore, we can change the properties of the object without any issues.
username.middlename = "kumar";
// console.log(username.middlename);

// console.log(username);
// This will add a new property called middlename to the username object with the value "kumar". In JavaScript, objects are dynamic, which means we can add new properties to them at any time. After adding the middlename property, the username object will now have four properties: firstname, lastname, isLoggedIn, and middlename.

// console.log(username["firstname"]);
// This will print "Hani" because we are using bracket notation to access the firstname property. The correct property name is "firstname" without a space. When we try to access a property that does not exist in an object, it returns undefined. To access the firstname property correctly, we should use username["firstname"] or username.firstname.

const user={
    "first name": "Hani1",
    "last name": "Garg1",
    "is logged in": true
}
// console.log(user["first name"]);
// This will print "Hani1" because we are using bracket notation to access the "first name" property of the user object. In this case, since the property name contains a space, we cannot use dot notation to access it. Instead, we need to use bracket notation with the property name enclosed in quotes.

let today = new Date();
console.log(today.getDate());
// This will print the current date (day of the month) using the getDate() method of the Date object. The Date object is a built-in non-primitive data type in JavaScript that represents a specific point in time. By calling the getDate() method on the today object, we can retrieve the day of the month from the current date.


// 2. Arrays: Arrays are ordered collections of values, where each value can be of any data type. Arrays can hold multiple values and are indexed starting from 0. For example:
let heros = ["Hulk", "Iron Man", "Thor", "spiderman"];
//console.log(heros);
// In this example, we have created an array called heros that contains four string values: "Hulk", "Iron Man", "Thor", and "spiderman". The array is a non-primitive data type because it can hold multiple values and has a more complex structure compared to primitive data types. We can access the elements of the array using their index (e.g., heros[0] for "Hulk", heros[1] for "Iron Man", heros[2] for "Thor", and heros[3] for "spiderman"). We can also modify the elements of the array by assigning new values to specific indices (e.g., heros[0] = "Captain America" to change "Hulk" to "Captain America").

//console.log(heros[0]);

let auser = ["hani" , true];
console.log(1+"1");
console.log("1"+1);

let isvalue = false;
console.log(isvalue + 1);

console.log(Number(isvalue));
console.log(typeof Number(isvalue));

let isval = "2abc";
console.log(Number(isval));
console.log(typeof Number(isval));

// In JavaScript, when we perform operations between different data types, type coercion can occur. For example, when we add a number and a string, JavaScript will convert the number to a string and concatenate them instead of performing arithmetic addition. This is why console.log(1 + "1") results in "11" instead of 2. Similarly, when we add a boolean value (like false) to a number, JavaScript will convert the boolean to a number (false becomes 0 and true becomes 1) before performing the addition. Therefore, console.log(isvalue + 1) will output 1 because false is converted to 0 and then added to 1. When we try to convert a non-numeric string (like "2abc") to a number using Number(), it will return NaN (Not-a-Number) because the string cannot be parsed as a valid number.