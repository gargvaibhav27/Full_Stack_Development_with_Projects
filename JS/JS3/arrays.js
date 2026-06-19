/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
//let teaflavor1 = new array("green tea", "black tea", "oolong tea"); // this is another way to declare an array using the Array constructor. However, it is recommended to use the array literal syntax ([]) to declare arrays because it is more concise and easier to read.
let firstTea = teaFlavors[0]; // const firstTea = teaFlavours[0];
// here we are accessing the first element of the array using the index 0. In JavaScript, array indices start at 0, so the first element is at index 0, the second element is at index 1, and so on.

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2]; // const favoriteCity = cities[2];
// here we are accessing the third element of the array using the index 2. As mentioned earlier, array indices start at 0, so the first element is at index 0, the second element is at index 1, and the third element is at index 2.

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbel tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";    // here we are changing the second element of the array by assigning a new value to the index 1. After this operation, the array will be ["herbal tea", "jasmine tea", "masala chai"].

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai", "Sydney"];
console.log(citiesVisited.length); // here we are checking the length of the array before adding a new element. The length of the array is 2 because it contains 2 elements. The indices of the elements are 0 and 1. Therefore, the next index that we can use to add a new element is 2. We can add "Berlin" to the end of the array by assigning it to index 2, like this: citiesVisited[2] = "Berlin". However, it is recommended to use the push method to add an element to the end of the array because it is more concise and easier to read. The push method adds one or more elements to the end of an array and returns the new length of the array. For example, we can use citiesVisited.push("Berlin") to add "Berlin" to the end of the citiesVisited array.
citiesVisited[2] = "Berlin"; // it is one way to add an element to the end of the array by assigning a new value to the index that is equal to the current length of the array. 
citiesVisited.push("Berlin");
// However, it is recommended to use the push method to add an element to the end of the array because it is more concise and easier to read. The push method adds one or more elements to the end of an array and returns the new length of the array. For example, we can use citiesVisited.push("Berlin") to add "Berlin" to the end of the citiesVisited array.

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop(); // here we are using the pop method to remove the last element of the array and store it in a variable named lastOrder. The pop method removes the last element from an array and returns that element. After this operation, the teaOrders array will be ["chai", "iced tea", "matcha"] and the lastOrder variable will contain the value "earl grey".

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas.slice(); // here we are using the slice method to create a soft copy of the popularTeas array. The slice method returns a shallow copy of a portion of an array into a new array object. If we call slice() without any arguments, it will return a copy of the entire array. Therefore, we can use popularTeas.slice() to create a soft copy of the popularTeas array and store it in the softCopyTeas variable. After this operation, both popularTeas and softCopyTeas will contain the same elements, but they will be different arrays in memory. This means that if we modify one of the arrays, it will not affect the other array.
let softCopyTeas2 = popularTeas;  // this is another way to create a copy of an array by assigning it to a new variable. However, this will not create a new array in memory, but rather it will create a reference to the same array. This means that if we modify one of the arrays, it will affect the other array because they are both referencing the same array in memory. Therefore, it is recommended to use the slice method to create a soft copy of an array instead of assigning it to a new variable.

popularTeas.pop(); // here we are modifying the popularTeas array by removing the last element using the pop method. After this operation, the popularTeas array will be ["green tea", "oolong tea"] and the softCopyTeas array will still be ["green tea", "oolong tea", "chai"] because it is a different array in memory. However, the softCopyTeas2 variable will also be modified because it is referencing the same array as popularTeas. Therefore, after this operation, both popularTeas and softCopyTeas2 will be ["green tea", "oolong tea"] while softCopyTeas will still be ["green tea", "oolong tea", "chai"]. This is why it is important to create a copy of an array when we want to modify it without affecting the original array.

console.log(popularTeas); // ["green tea", "oolong tea"]
console.log(softCopyTeas); // ["green tea", "oolong tea", "chai"]
console.log(softCopyTeas2); // ["green tea", "oolong tea"]

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // here we are using the spread operator (...) to create a hard copy of the topCities array. The spread operator allows us to spread the elements of an array into a new array. Therefore, we can use [...topCities] to create a new array that contains the same elements as topCities and store it in the hardCopyCities variable. After this operation, both topCities and hardCopyCities will contain the same elements, but they will be different arrays in memory. This means that if we modify one of the arrays, it will not affect the other array.
let hardCopyCities2 = topCities; // this is another way to create a copy of an array by assigning it to a new variable. However, this will not create a new array in memory, but rather it will create a reference to the same array. This means that if we modify one of the arrays, it will affect the other array because they are both referencing the same array in memory. Therefore, it is recommended to use the spread operator to create a hard copy of an array instead of assigning it to a new variable.
topCities.pop(); // here we are modifying the topCities array by removing the last element using the pop method. After this operation, the topCities array will be ["Berlin", "Singapore"] and the hardCopyCities array will still be ["Berlin", "Singapore", "New York"] because it is a different array in memory. However, the hardCopyCities2 variable will also be modified because it is referencing the same array as topCities. Therefore, after this operation, both topCities and hardCopyCities2 will be ["Berlin", "Singapore"] while hardCopyCities will still be ["Berlin", "Singapore", "New York"]. This is why it is important to create a copy of an array when we want to modify it without affecting the original array.
let hardCopyCities3 = topCities.slice(); // this is another way to create a hard copy of an array using the slice method. The slice method returns a shallow copy of a portion of an array into a new array object. If we call slice() without any arguments, it will return a copy of the entire array. Therefore, we can use topCities.slice() to create a hard copy of the topCities array and store it in the hardCopyCities3 variable. After this operation, both topCities and hardCopyCities3 will contain the same elements, but they will be different arrays in memory. This means that if we modify one of the arrays, it will not affect the other array. After the pop operation on topCities, the topCities array will be ["Berlin", "Singapore"] and the hardCopyCities3 array will still be ["Berlin", "Singapore", "New York"] because it is a different array in memory. This is another reason why it is important to create a copy of an array when we want to modify it without affecting the original array.
console.log(topCities); // ["Berlin", "Singapore"]
console.log(hardCopyCities); // ["Berlin", "Singapore", "New York"]
console.log(hardCopyCities2); // ["Berlin", "Singapore"]
console.log(hardCopyCities3); // ["Berlin", "Singapore", "New York"]

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities + asianCities;
console.log(typeof worldCities); // here we are checking the type of the worldCities variable after merging the two arrays using the + operator. 
 // this is one way to merge two arrays using the + operator. However, this will not work as expected because the + operator will concatenate the two arrays into a single string instead of merging them into a new array. Therefore, it is recommended to use the spread operator or the concat method to merge two arrays.

let worldCities2 = [...europeanCities, ...asianCities]; // here we are using the spread operator to merge the europeanCities and asianCities arrays into a new array named worldCities2. The spread operator allows us to spread the elements of an array into a new array. Therefore, we can use [...europeanCities, ...asianCities] to create a new array that contains all the elements from both arrays and store it in the worldCities2 variable. After this operation, the worldCities2 array will contain ["Paris", "Rome", "Tokyo", "Bangkok"].
let worldCities3 = europeanCities.concat(asianCities); // here we are using the concat method to merge the europeanCities and asianCities arrays into a new array named worldCities3. The concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array that contains all the elements from the merged arrays. Therefore, we can use europeanCities.concat(asianCities) to create a new array that contains all the elements from both arrays and store it in the worldCities3 variable. After this operation, the worldCities3 array will contain ["Paris", "Rome", "Tokyo", "Bangkok"].
let worldCities4 = [europeanCities, asianCities]; // this is another way to merge two arrays by creating a new array that contains the two arrays as elements. However, this will not work as expected because it will create a nested array instead of merging the two arrays into a single array. Therefore, it is recommended to use the spread operator or the concat method to merge two arrays instead of creating a new array that contains the two arrays as elements.
console.log(worldCities); // "Paris,RomeTokyo,Bangkok"
console.log(worldCities2); // ["Paris", "Rome", "Tokyo", "Bangkok"]
console.log(worldCities3); // ["Paris", "Rome", "Tokyo", "Bangkok"]
console.log(worldCities4); // [["Paris", "Rome"], ["Tokyo", "Bangkok"]]

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length; // here we are using the length property of the array to find the length of the teaMenu array and store it in the menuLength variable. The length property returns the number of elements in an array. Therefore, after this operation, the menuLength variable will contain the value 4 because there are 4 elements in the teaMenu array.
console.log(menuLength); // 4

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London"); // here we are using the includes method to check if the string "London" is in the cityBucketList array and store the result in the isLondonInList variable. The includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate. Therefore, after this operation, the isLondonInList variable will contain the value true because "London" is indeed in the cityBucketList array.
let isLondonInList1 = cityBucketList.includes("london");
console.log(isLondonInList); // true
console.log(isLondonInList1); // false because the includes method is case-sensitive, so it will not find "london" in the cityBucketList array since it is not an exact match for "London".