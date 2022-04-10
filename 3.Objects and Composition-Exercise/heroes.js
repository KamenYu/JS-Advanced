function solve() {
    class fighter {
        constructor(name) {
            [this.name , this.health , this.stamina]=[name , 100 , 100]
        }
        fight() {
            this.stamina--
            console.log(`${this.name} slashes at the foe!`);
        }
    }
    class mage {
        constructor(name) {
            [this.name , this.health , this.mana]=[name , 100 , 100]
        }
        cast(spell) {
            this.mana--
            console.log(`${this.name} cast ${spell}`)
        }
    }
 
    return {
        mage : (name) => new mage(name),
        fighter : (name) => new fighter(name)
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);