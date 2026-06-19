//Prototypes
let computer = {cpu: 12};
let lenovo = {
    screen: "HD",
    __proto__: computer
};
let tomhardware = {};

console.log(`computer`, computer.__proto__);

//__proto__: is known as dunder proto, it is a property that points to the prototype of an object. It allows objects to inherit properties and methods from their prototype. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain using the __proto__ property until it finds the property or reaches the end of the chain (null). This is how inheritance works in JavaScript, allowing objects to share common functionality through their prototypes.

console.log(`lenovo`, lenovo.__proto__);
console.log(`lenovo`, lenovo.cpu);
console.log(`tomhardware`, tomhardware.__proto__);

let genericCar = {tyres: 4};
let tesla = {
    driver: "AI"
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, genericCar);
console.log(`tesla`, tesla);
console.log(`tesla`, Object.getPrototypeOf(tesla));

//Object.setPrototypeOf(): is a method that allows you to set the prototype of an object. It takes two arguments: the object whose prototype you want to set and the new prototype object. By using Object.setPrototypeOf(), you can establish inheritance relationships between objects, enabling them to share properties and methods defined in their prototypes. This method is useful for creating objects that inherit behavior from other objects, promoting code reuse and modularity in JavaScript.

//Object.getPrototypeOf(): is a method that allows you to retrieve the prototype of an object. It takes one argument: the object whose prototype you want to get. By using Object.getPrototypeOf(), you can access the prototype of an object and examine its properties and methods. This method is useful for understanding the inheritance chain of an object and for inspecting the behavior and characteristics inherited from its prototype. 