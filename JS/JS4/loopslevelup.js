/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teas1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for(let i = 0; i < teas1.length; i++){
    if(teas1[i] === "chai"){
        break; // here we are using the break statement to exit the loop when we find the string "chai" in the teas array. The break statement is used to terminate the current loop and transfer control to the statement immediately following the loop. Therefore, when the condition teas[i] === "chai" is true, the loop will stop executing and we will have all the teas before "chai" stored in the selectedTeas array.

    }
    selectedTeas.push(teas1[i]); // here we are using the push method to add each tea to the selectedTeas array as long as we have not yet found "chai". The push method adds one or more elements to the end of an array and returns the new length of the array. Therefore, for each iteration of the loop where teas1[i] is not equal to "chai", we will add that tea to the selectedTeas array. After the loop finishes executing, the selectedTeas array will contain ["green tea", "black tea"], which are the teas that come before "chai" in the original teas array.
}
//console.log(selectedTeas); // here we are printing the selectedTeas array to the console. After the loop finishes executing, the selectedTeas array will contain ["green tea", "black tea"], which are the teas that come before "chai" in the original teas array.

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for(let i = 0; i < cities.length; i++){
    if(cities[i] === 'paris' || cities[i] === 'Paris') {
        continue;
    }
    visitedCities.push(cities[i])
}
console.log(visitedCities)

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1,2,3,4,5];
let smallnumbers = [];

for (const num of numbers) { 
    if(num === 4){
        break;
    }
    smallnumbers.push(num)
} // here we are using a for-of loop to iterate through each number in the numbers array. The for-of loop allows us to loop through iterable objects such as arrays. Inside the loop, we check if the current number (num) is equal to 4. If it is, we use the break statement to exit the loop. If it is not, we push the current number into the smallnumbers array. After the loop finishes executing, the smallnumbers array will contain [1, 2, 3], which are the numbers that come before 4 in the original numbers array.
console.log(smallnumbers);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teas) {
    if(tea === "herbal tea"){
        continue;
    }
    preferredTeas.push(tea);
} // here we are using a for-of loop to iterate through each tea in the teas array. Inside the loop, we check if the current tea is equal to "herbal tea". If it is, we use the continue statement to skip that iteration and move on to the next tea. If it is not "herbal tea", we push the current tea into the preferredTeas array. After the loop finishes executing, the preferredTeas array will contain ["chai", "green tea", "black tea"], which are the teas that are not "herbal tea" in the original teas array.
console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulations = {};
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
    if(worldCities[city]< 3000000){
        continue;
    }
    largeCities[city]=worldCities[city]; 
}console.log(largeCities)

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []
teaCollection.forEach(function(tea){
    if(tea === 'chai'){
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);


/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let myworldcities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
myworldcities.forEach(function (city){
    if(city === 'Sydney'){
        return;
    }
    traveledCities.push(city);
});
console.log(traveledCities);

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let n1 = [2,5,7,9];
let doubledNumber = [];
for (let i = 0; i < n1.length; i++) {
    if(n1[i] === 7){
        continue;
    }
    doubledNumber.push(n1[i]*2)
}
console.log(doubledNumber);


/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let myteas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortteas = [];
for (const tea of myteas) {
    if(tea.length>10){
        break;
    }
    shortteas.push(tea);
}
console.log(shortteas)