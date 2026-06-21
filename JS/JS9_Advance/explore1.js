// asynchronous

console.log("hi hi hi");

function sayHi() {
  console.log("I want to say hi");
}

setTimeout(() => {
  sayHi();
}, 3000);

// even the setTimeout function is written before the for loop, it will be executed after the for loop because of the asynchronous nature of JavaScript. It takes pause for network calls, write/read files, time function, user input, etc.
// event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenver possible. The event loop continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty.
for (let index = 0; index < 10; index++) {
  console.log(index);
}
