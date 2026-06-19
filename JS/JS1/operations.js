// operators are symbols that perform operations on operands (values or variables). They can be used to perform various tasks such as arithmetic calculations, comparisons, logical operations, and more. Here are some common types of operators in JavaScript:

// 1. Arithmetic Operators: these operators are used to perform mathematical operations on numbers. They include:
//    - Addition (+): adds two operands. Example: 5 + 3 = 8
//    - Subtraction (-): subtracts the second operand from the first. Example: 10 - 4 = 6
//    - Multiplication (*): multiplies two operands. Example: 6 * 7 = 42
//    - Division (/): divides the first operand by the second. Example: 20 / 5 = 4
//    - Modulus (%): returns the remainder of a division operation. Example: 10 % 3 = 1

let addition = 5 + 3; // addition operator
let subtraction = 10 - 4; // subtraction operator
let multiplication = 6 * 7; // multiplication operator
let division = 20 / 5; // division operator
let modulus = 10 % 3; // modulus operator (returns the remainder of a division operation)

let score = 100;
let bonus = 20;
let totalScore = score + bonus; // using the addition operator to calculate the total score


// 2. Comparison Operators: these operators are used to compare two values and return a boolean result (true or false). They include:
//    - Equal to (==): checks if two operands are equal. Example: 5 == "5" returns true (loose equality)
//    - Strict equal to (===): checks if two operands are equal and of the same type. Example: 5 === "5" returns false (strict equality)
//    - Not equal to (!=): checks if two operands are not equal. Example: 5 != "5" returns false (loose inequality)
//    - Strict not equal to (!==): checks if two operands are not equal or not of the same type. Example: 5 !== "5" returns true (strict inequality)
//    - Greater than (>): checks if the left operand is greater than the right operand. Example: 10 > 5 returns true
//    - Less than (<): checks if the left operand is less than the right operand. Example: 5 < 10 returns true
//    - Greater than or equal to (>=): checks if the left operand is greater than or equal to the right operand. Example: 10 >= 10 returns true
//    - Less than or equal to (<=): checks if the left operand is less than or equal to the right operand. Example: 5 <= 10 returns true

let num1 = 5;
let num2 = 10;
let isGreater = num1 > num2; // using the greater than operator to compare num1 and num2
let isEqual = num1 == num2; // using the equal to operator to compare num1 and num2
console.log(isGreater); // false
console.log(isEqual); // false 
console.log(num1 != num2); // true (using the not equal to operator to compare num1 and num2)
console.log(num1>num2);

let isStrictEqual = num1 === num2; // using the strict equal to operator to compare num1 and num2.
console.log(isStrictEqual); // false (because 5 is not strictly equal to 10)

// 3. Logical Operators: these operators are used to combine multiple boolean expressions and return a boolean result. They include:
//    - Logical AND (&&): returns true if both operands are true. Example: true && false returns false
//    - Logical OR (||): returns true if at least one of the operands is true. Example: true || false returns true
//    - Logical NOT (!): returns the opposite boolean value of the operand. Example: !true returns false.

let isloggedIn = true;
let hasSubscription = false;

let canAccessContent = isloggedIn && hasSubscription; // using the logical AND operator to determine if the user can access content. && returns true only if both operands are true. In this case, since hasSubscription is false, canAccessContent will be false regardless of the value of isloggedIn.

console.log(canAccessContent); // false (because hasSubscription is false)

let canAccessContentOr = isloggedIn || hasSubscription; // using the logical OR operator to determine if the user can access content. || returns true if at least one of the operands is true. In this case, since isloggedIn is true, canAccessContentOr will be true regardless of the value of hasSubscription.

console.log(canAccessContentOr); // true (because isloggedIn is true)

let isNotLoggedIn = !isloggedIn; // using the logical NOT operator to determine if the user is not logged in

console.log(isNotLoggedIn); // false (because isloggedIn is true)   

// 4. Assignment Operators: these operators are used to assign values to variables. They include:
//    - Assignment (=): assigns the value of the right operand to the left operand. Example: x = 5 assigns the value 5 to the variable x
//    - Addition assignment (+=): adds the right operand to the left operand and assigns the result to the left operand. Example: x += 3 is equivalent to x = x + 3
//    - Subtraction assignment (-=): subtracts the right operand from the left operand and assigns the result to the left operand. Example: x -= 2 is equivalent to x = x - 2
//    - Multiplication assignment (*=): multiplies the left operand by the right operand and assigns the result to the left operand. Example: x *= 4 is equivalent to x = x * 4
//    - Division assignment (/=): divides the left operand by the right operand and assigns the result to the left operand. Example: x /= 2 is equivalent to x = x / 2
//    - Modulus assignment (%=): takes the modulus of the left operand by the right operand and assigns the result to the left operand. Example: x %= 3 is equivalent to x = x % 3

let points = 50+20; // using the addition operator to calculate the total points
points += 10; // using the addition assignment operator to add 10 points to the existing points
console.log(points);

points -= 5; // using the subtraction assignment operator to subtract 5 points from the existing points
points *= 2; // using the multiplication assignment operator to double the points
points /= 4; // using the division assignment operator to divide the points by 4
points %= 3; // using the modulus assignment operator to calculate the remainder when points is divided by 3

// 5. Increment and Decrement Operators: these operators are used to increase or decrease the value of a variable by 1. They include:
//    - Increment (++) : increases the value of a variable by 1. Example: x++ is equivalent to x = x + 1
//    - Decrement (--) : decreases the value of a variable by 1. Example: x-- is equivalent to x = x - 1

let myscore = 85;
myscore++; // using the increment operator to increase the score by 1
myscore--; // using the decrement operator to decrease the score by 1

// 6. Exponentiation Operator (**): this operator is used to raise the left operand to the power of the right operand. Example: 2 ** 3 returns 8 (2 raised to the power of 3)

let expo = 2 ** 2; // using the exponentiation operator to calculate 2 raised to the power of 2 (which is 4)

// These are just some of the many operators available in JavaScript, and they can be combined in various ways to create complex expressions and perform a wide range of operations in your code.   

// operator precedence determines the order in which operators are evaluated in an expression. In JavaScript, operators have different levels of precedence, and when multiple operators are present in an expression, the operator with higher precedence is evaluated first. For example, in the expression 3 + 4 * 2, the multiplication operator (*) has higher precedence than the addition operator (+), so the multiplication is performed first, resulting in 3 + (4 * 2) = 3 + 8 = 11. Understanding operator precedence is important to ensure that your expressions are evaluated correctly and produce the expected results.









