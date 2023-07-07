/* Fighter class definition */
const maxLife = 100 ;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name ;
        this.strength = strength ;
        this.dexterity = dexterity ;
        this.life = maxLife ;
    }
    fight (defender) {
        const hit = Math.floor(Math.random() * (this.strength - 1) + 1);
        let damage = hit - defender.dexterity ;
        if (damage <= 0) {
            damage = 0
        } 
        defender.life = defender.life - damage ;
        if (defender.life <= 0) {
            defender.life = 0
        }
    }

    isAlive() {
        return this.life > 0 ;
    }
}

module.exports = Fighter ;