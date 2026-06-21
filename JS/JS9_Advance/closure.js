// Closure are functions that have access to the outer (enclosing) function's variables even after the outer function has returned. They are created whenever a function is defined inside another function and the inner function references variables from the outer function.

function outer() {
  let counter = 3;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
