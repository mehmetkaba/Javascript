//Array
const numbers1 = [1, 2, 3];
const numbers2 = [0, 2, 4];

const x = numbers1.concat(numbers2);
const y = [...numbers1, ...numbers2];

console.log(x);
console.log(y);

//Object
const player = {name: "Sergio", surname: "Ramos"}
const detail = {position: "CB", number: 4}

const playerInfo = {...player, ...detail};

console.log(playerInfo);