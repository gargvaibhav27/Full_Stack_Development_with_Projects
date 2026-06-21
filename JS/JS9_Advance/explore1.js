// asynchronous

console.log("hi hi hi");

function sayHi() {
    console.log("I want to say hi");
}


setTimeout(() => {
    sayHi();
}, 3000);


for (let index = 0; index < 10; index++) {
    console.log(index)
    
}