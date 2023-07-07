class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(monster, hero) {
      const placePlayer = Math.sqrt(
        Math.pow(monster.x - hero.x, 2) + Math.pow(monster.y - hero.y, 2)
      );
      return parseFloat(placePlayer.toFixed(2));
  }

  isTouchable(attacker, defender) {
    if (attacker.getRange() >= this.getDistance(defender, attacker)) {
      return true;
    }
  }
}
