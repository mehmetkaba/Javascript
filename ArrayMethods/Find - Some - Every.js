// Find     ->  Şarta uyan ilk kaydı döner
// Some     ->  Şarta uyan kayıt varsa true döner
// Every    ->  Bütün kayıtlar şarta uyuyorsa true döner

const players = [
    { name: "Buffon",   number: 1,  position: "GK"  },
    { name: "Cafu",     number: 2,  position: "RB"  },
    { name: "Ramos",    number: 4,  position: "CB"  },
    { name: "Zidane",   number: 5,  position: "CAM" },
    { name: "Beckham",  number: 7,  position: "RM"  },
    { name: "Gerrard",  number: 8,  position: "CM"  },
    { name: "Ronaldo",  number: 9,  position: "ST"  },
    { name: "Totti",    number: 10, position: "CAM" },
    { name: "Giggs",    number: 11, position: "LM"  },
    { name: "Henry",    number: 14, position: "ST"  }
];

console.log(
    players.find( player => player.number > 5 )
);

console.log(
    players.some( player => player.position === "CAM" )
);

console.log(
    players.every( player => player.name === "Henry" )
);