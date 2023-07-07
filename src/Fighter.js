const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.getDamage());

    const damages = Math.max(attackPoints - defender.getDefense(), 0);

    defender.life = Math.max(defender.life - damages, 0);
  }

  // Bonus Weapon
  getDamage() {
    if (this.weapon !== null) {
      return this.strength + this.weapon.damage;
    } else {
      return this.strength;
    }
  }

  // Bonus Defense
  getDefense() {
    if (this.shield !== null) {
      return this.dexterity + this.shield.protection
    } else {
      return this.dexterity;
    }
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
