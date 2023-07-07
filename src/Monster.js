class Monster extends Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    super(name, strength, dexterity, image, x , y);
  }
  getDamage() {
    return this.strength;
  }
  getDefense() {
    return this.dexterity;
  }
}
