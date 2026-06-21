// promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucess = true; // change this to false to see the rejected state
      if (sucess) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}
// let response = fetchData();
// console.log(response); // Promise {<pending>}
//here we are getting the promise object in pending state because the fetchData function is asynchronous and it takes 3 seconds to complete. So, the promise is in pending state for 3 seconds and then it will be either fulfilled or rejected based on the value of the success variable.

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
// here we are using the then method to handle the fulfilled state of the promise and the catch method to handle the rejected state of the promise. The then method takes a callback function as an argument which will be executed when the promise is fulfilled and the catch method takes a callback function as an argument which will be executed when the promise is rejected.