// Dizileri parçalayıp değişkenlere atama işlemi

const players = [
    "Dida", "Nesta", "Pirlo", "Crespo", "Kaladze", "Gattuso", "Inzaghi"
];

const [GK, DEF, MID, FOR, ...others] = players;

console.log(GK + " - " + DEF + " - " + MID + " - " + FOR);
console.log(others);