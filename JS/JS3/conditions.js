// checking if a number is greater then another number.

let num1 = 5;
let num2 = 8;
/*
console.log("I'm not a coder");
if(num1 >num2){
    console.log("num1 is greater then num2");
} else{
    console.log("num2 is greater then num1");
}
// if and else statement is used to check if a condition is true or false. If the condition is true, the code inside the if block will be executed. If the condition is false, the code inside the else block will be executed.
console.log("I'm a coder");
*/

// checking if a string is equal to another string.
let user1 = "John";
let user2 = "John";
/*
if(user1 == user2){
    console.log("pick another username");
} else{
    console.log("you can use this username");
}
// in this example, we are checking if the two strings are equal. If they are equal, we will print "pick another username". If they are not equal, we will print "you can use this username".
*/
 
// checking if a variable is number or not.
let score = 85;
/*
if(typeof score === "number"){ //here we used === to check if the type of score is number. We can also use typeof score == "number" but it is recommended to use === to avoid type coercion. type coercion is when JavaScript automatically converts a value from one type to another. For example, if we use == to compare a number and a string, JavaScript will convert the string to a number before comparing them. This can lead to unexpected results. For example, if we compare 5 and "5" using ==, it will return true because JavaScript will convert the string "5" to the number 5 before comparing them. However, if we use ===, it will return false because the types are different. Therefore, it is recommended to use === to avoid type coercion and ensure that we are comparing values of the same type.
    console.log("yup, this is a number");
} else{
    console.log("nope, this is not a number");
}*/

let score1 = [];
/*
if(typeof score1 === "array"){ // here we are checking if the type of name is array. However, this will not work because typeof operator returns "object" for arrays. To check if a variable is an array, we can use Array.isArray() method. For example, we can use if(Array.isArray(name)) to check if name is an array.
    console.log("yup, this is an array");
}else{
    console.log("nope, this is not an array");
}
*/

// checking if a boolean value is true or false.
let isloggerIn = false;
/*
if(isloggerIn){
    console.log("welcome back!");
} else{
    console.log("please log in to continue");
}
// in this example, we are checking if the boolean value isloggerIn is true or false. If it is true, we will print "welcome back!". If it is false, we will print "please log in to continue".
*/

//checking if the array is empty or not.
let items = ["1"];
/*
if(items.length === 0){
    console.log("array is empty");
}else{
    console.log("array is not empty");
}
// in this example, we are checking if the length of the array is 0. If it is 0, we will print "array is empty". If it is not 0, we will print "array is not empty".
*/