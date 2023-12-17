// Objeleri parçalayıp değişkenlere atama işlemi

const playerInfo = {
    name: "Sergio",
    surname: "Ramos",
    position: "CB",
    number: 4
}

const {name, surname, ...playerInfoDetails} = playerInfo;

console.log(name + "-" + surname);
console.log(playerInfoDetails);