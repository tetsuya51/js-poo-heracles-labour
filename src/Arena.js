class Arena {
  constructor(hero, monsters, size = 10, message) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = size;
    message = "";
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(
      Math.pow(fighter2.x - fighter1.x, 2) +
        Math.pow(fighter2.y - fighter1.y, 2)
    ).toFixed(2);
  }

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange();
  }

  exists(position) {
    console.log(position);
    if (
      position.y < 0 ||
      position.x < 0 ||
      position.y >= this.size ||
      position.x >= this.size
    ) {
      this.showErrorMessage("Vous sortez de la carte");
      return false;
    }
    this.showErrorMessage("");
    return true;
  }

  showErrorMessage(message) {
    let elemId = document.getElementById("error");
    elemId.innerHTML = message;
  }

  isEmpty(position) {
    for (let i = 0; i < this.monsters.length; i++) {
      if (
        this.monsters[i].x === position.x &&
        this.monsters[i].y === position.y
      ) {
        this.showErrorMessage("Un objet vous bloque");
        return false;
      }
    }
    this.showErrorMessage("");
    return true;
  }

  // Hero movement managment
  // Gestion du déplacement du héros
  move(direction) {
    const position = {
      x: this.hero.x,
      y: this.hero.y,
    };
    const oldPosition = { ...position };

    if (direction === "N") {
      position.y--;
    }

    if (direction === "S") {
      position.y++;
    }

    if (direction === "E") {
      position.x--;
    }

    if (direction === "W") {
      position.x++;
    }

    if (this.exists(position) && this.isEmpty(position)) {
      this.hero.x = position.x;
      this.hero.y = position.y;
    }

    return oldPosition;
  }
}
