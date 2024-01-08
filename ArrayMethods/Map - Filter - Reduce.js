// Map      ->  Verilen diziye girilen fonksiyonu uygular ve yine bir dizi olarak döndürür
// Filter   ->  Kosula göre kalan itemlar dizi olarak geri döner
// Reduce   ->  Her donusteki degerini hatırlayıp bununla işlem yapılabiliyor (Örneği incele)


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
    players.map((player, index) => `${index + 1} => ${player.number} numaralı oyuncu ${player.name} bir ${player.position} oyuncusudur.`)
);

console.log(
    players.filter( player => player.position === "ST" )
);

// Total'i 0'dan başlattık. Her dönüşte total'e number'ı ekledik.
console.log(
    players.reduce( (total, player) => total + player.number, 0)
);

//Text'te tüm oyuncu isimlerini alıp birleştirdik.
console.log(
    players.reduce( (text, player) => text + player.name + " - ", "Players: " )
);