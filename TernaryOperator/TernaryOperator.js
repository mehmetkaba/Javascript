// condition ? true : false

let isLoading = true;
let message = isLoading ? "Please wait..." : "Select your hero!";
console.log(message);


const myArray = [];
const myObject = {};

console.log(myArray ? "x" : "y");                           // x
console.log(myArray.length ? "x" : "y");                    // y

console.log(myObject ? "x" : "y");                          // x
console.log(Object.keys(myObject).length ? "x" : "y");      // y



