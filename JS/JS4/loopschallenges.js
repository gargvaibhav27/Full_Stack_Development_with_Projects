/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let sum = 0;
let i = 1;
while (i <=5){
    sum = sum +i; // sum += i
    i++;
    // here we are using a while loop to calculate the sum of all numbers from 1 to 5. We initialize the sum variable to 0 and the i variable to 1. The loop will continue to execute as long as i is less than or equal to 5. Inside the loop, we add the value of i to the sum variable and then increment i by 1. After the loop finishes executing, the sum variable will contain the total sum of all numbers from 1 to 5, which is 15.
}
console.log(sum); // 15

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let countdown = [];
let j = 5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
// let teaCollection = [];
// let tea; 
// do {
//     tea = prompt(`Enter your favourite tea(type "stop" to finish)`); 
// prompt is a built-in function in JavaScript that displays a dialog box that prompts the user for input. The function takes a string argument that is displayed as the message in the dialog box. In this case, we are asking the user to enter their favorite tea type and informing them that they can type "stop" to finish entering tea types. The user's input will be stored in the tea variable, which we can then use to check if they want to stop entering tea types or if we should add their input to the teaCollection array.
//     if(tea === "stop"){
//         teaCollection.push(tea);
//     }
// } while (tea !== "stop");
// console.log(teaCollection); 
// here we are using a do...while loop to prompt the user to enter their favorite tea type until they enter "stop". We initialize an empty array named teaCollection to store the tea types entered by the user. Inside the loop, we use the prompt function to ask the user for their favorite tea type and store their input in the tea variable. We then check if the user's input is not equal to "stop". If it is not "stop", we add their input to the teaCollection array using the push method. The loop will continue to execute until the user enters "stop", at which point the final list of tea types entered by the user will be stored in the teaCollection array and printed to the console.


/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total = 0;
let k = 1;
do {
    total += k; // total = total + k
    k++; 
} while (k <= 3);
console.log(total); // 6
// here we are using a do...while loop to add numbers from 1 to 3 and store the result in a variable named total. We initialize the total variable to 0 and the k variable to 1. Inside the loop, we add the value of k to the total variable and then increment k by 1. The loop will continue to execute as long as k is less than or equal to 3. After the loop finishes executing, the total variable will contain the sum of numbers from 1 to 3, which is 6.

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let multipliedNumbers = [];
let numbers = [2,4,6];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

for(let l = 0; l < numbers.length; l++){
    // takeNumber = numbers[l]*2;
    // multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(numbers[l] * 2); // here we are using a for loop to iterate through each element in the numbers array, multiply it by 2, and store the result in the multipliedNumbers array. We initialize an empty array named multipliedNumbers to store the results. The loop starts with l set to 0 and continues as long as l is less than the length of the numbers array. Inside the loop, we take the current element at index l from the numbers array, multiply it by 2, and then push the result into the multipliedNumbers array. After the loop finishes executing, the multipliedNumbers array will contain [4, 8, 12], which are the results of multiplying each element in the original array by 2.
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for(let m = 0; m < cities.length; m++){
    cityList.push(cities[m]);
}
console.log(cityList); // here we are using a for loop to iterate through each element in the cities array and store each city in a new array named cityList. We initialize an empty array named cityList to store the results. The loop starts with m set to 0 and continues as long as m is less than the length of the cities array. Inside the loop, we take the current element at index m from the cities array and push it into the cityList array. After the loop finishes executing, the cityList array will contain ["Paris", "New York", "Tokyo", "London"], which are the same cities as in the original array.
