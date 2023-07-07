// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");


const Heracles = new Fighter("🧔 Heracles", 20, 6,);
const Nemean = new Fighter("🦁 Nemean", 11 ,13 );

let round = 1;
while (Heracles.isAlive() && Nemean.isAlive()) {
    Heracles.fight(Nemean);
    console.log(`round ${round} : Heracles se bat contre Nemean ! PV de Nemean ${Nemean.life}`);
    Nemean.fight(Heracles);
    console.log(`round ${round} : Nemean se bat contre Heracles ! PV de Heracles ${Nemean.life}`);
    round = round + 1
}

if (Heracles.life === 0) {
    console.log(`Vainqueur : ${Nemean.name} ! Perdant : ${Heracles.name}`)
} else {
    console.log(`Vainqueur : ${Heracles.name} ! Perdant : ${Nemean.name}`)
}
