// generator in JavaScript is a special type of function that can be paused and resumed, allowing you to generate a sequence of values over time. Generators are defined using the `function*` syntax and use the `yield` keyword to produce values. 
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
let gen2 = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // undefined because there are only 3 yields in the generator function.

console.log(gen2.next().value); // 1 because gen2 is a new instance of the generator function.
console.log(gen2.next().value); // 2 because gen2 is a new instance of the generator function.