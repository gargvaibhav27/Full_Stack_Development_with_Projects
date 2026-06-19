// loops in JavaScript are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in JavaScript, including for loops, while loops, and do...while loops.

// 1. For Loop
// A for loop is used to execute a block of code a specific number of times. It consists of three parts: the initialization, the condition, and the increment/decrement.

for (let i = 0; i < 5; i++) {
    console.log(i); // This will print numbers from 0 to 4
}

// 2. While Loop
// A while loop is used to execute a block of code as long as a specified condition is true.

let j = 0;
while (j < 5) {
    console.log(j); // This will also print numbers from 0 to 4
    j++;
}

// 3. Do...While Loop
// A do...while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.

let k = 0;
do {
    console.log(k); // This will print numbers from 0 to 4
    k++;
} while (k < 5);

// Loops are essential for performing repetitive tasks and iterating over data structures like arrays and objects. They help in reducing code redundancy and improving efficiency.  