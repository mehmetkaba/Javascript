const sum = (num1, num2, num3) => num1 + num2 + num3;
const numbers = [1, 2, 3];

//console.log(sum(numbers));  result: 1,2,3undefinedundefined
console.log(sum(...numbers)); //result 6