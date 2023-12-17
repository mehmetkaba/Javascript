// Varsayılan parametre değeri

const add = (x = 0, y = 0) => x + y;

console.log(add());
console.log(add(5));
console.log(add(5, 5));