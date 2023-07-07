const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/** Create the weapon  */
const sword = new Weapon("Épée", 10);
/** Create the shield  */
const bouclier = new Shield();

/**  Equipement des armes et bouclier === null ou définie      */
heracles.weapon = sword;
heracles.shield = bouclier;
console.log(heracles)

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};

// Let's fight !!!
{
  let round = 0;

  while (heracles.isAlive() && boar.isAlive()) {
    console.log(`🕛 Round #${round}`);

    heracles.fight(boar);
    console.log(roundDisplay(heracles, boar));

    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));

    round++;
  }

  const result = score(heracles, boar);

  console.log(`💀 ${result.loser.name} is dead`);
  console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
}
