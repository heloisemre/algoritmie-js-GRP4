class pokemon {
    constructor(name,attack,defense,hp,luck) {
       this.name = name 
       this.attack = attack
       this.defense = defense
       this.hp = hp
       this.luck = luck
    }
    isLucky(){
        return this.luck > Math.random()

    }

    attackPokemon (pokemon) {

       if(this.isLucky()) {
          let dmg = this.attack - pokemon.defense 
          pokemon.hp -= dmg 
          console.log(dmg + " ont ete infliges")
          console.log("il reste "+ pokemon.hp +" a " + pokemon.name)
       } else {
        console.log("l'attaque echoue")
}
    }
}


let dracaufeu = new pokemon ("dracaufeu", 50, 25, 120, 0.7)
let tortank = new pokemon ("tortank", 35, 40, 150, 0.8)

// boucle
// tant que dracaufeu

while(dracaufeu.hp > 0 && tortank.hp > 0) {
    dracaufeu.attackPokemon(tortank)

    if(tortank.hp <= 0){
        console.log("tortank est KO")
        break
    }

    tortank.attackPokemon(dracaufeu)
    if(dracaufeu.hp <=0){
        console.log("dracaufeu est KO")
        break
    }


}

          
    
