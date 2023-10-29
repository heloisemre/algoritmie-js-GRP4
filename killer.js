class killer {
    constructor(names, point_de_vie) {
    this.names = names
    this.point_de_vie = point_de_vie
    }
}

let jason = new killer ("jason", 100)


class survivor {
    constructor(caracteristiques, cliches, probabilite_mort, degat, degat_mortelle) {
        this.probabilite_mort = probabilite_mort
        this.carasteristiques = caracteristiques
        this.degat = degat
        this.degat_mortelle = degat_mortelle
        this.cliches = cliches
    }
}

let names = ["romeo","lisa","antoine","olivia","carla"]
let caracteristiques = ["blonde","sportive","tall","red","brown"]
let creatname 

let survivor0 = new survivor (creatname,"blonde", 0.3, 0.5, 0.2)
let survivor1 = new survivor (creatname,"sportive", 0.3, 0.5, 0.2)
let survivor2 = new survivor (creatname,"tall", 0.3, 0.5, 0.2)
let survivor3 = new survivor (creatname, "red", 0.3, 0.5, 0.2)
let survivor4 = new survivor (creatname, "brown", 0.3, 0.5, 0.2) 



function aleatoire_name (){
    let randomname = Math.floor(Math.random() * prenoms.length)
    let creatname = caracteristiques [randomname]

    return creatname
}

function aleatoire_cliches (){
    let random_cliches = Math.floor(Math.random() * caracteristiques.length)
    let creat_cliches = cliches [random_cliches]
    return creat_cliches

}

while (jason.point_de_vie > 0 ){
  //let survivor_cible = survivor.filter((survivor) => survivor.point_de_vie > 0)[Math.floor(Math.random() * 5)]
  //attaquer_survivor(jason, survivor_cible);
  

function attaquer_survivor(killer, survivor) {
    let random = Math.random()
  
    if (random < killer.probabilite_mort) {
      console.log("killer.name a tue survivor.names")
      survivor.point_de_vie = 0
   
    } else if (random < killer.degats) {
      let degats = 10
      survivor.point_de_vie -= degats
      console.log("survivor.name a esquive et a inflige degats, points de degats a killer.name")
   
    } else if (random < killer.degats) {
      let degats = 15;
      killer.point_de_vie -= degats;
      console.log("survivor.name a inflige 15 points de degats a killer.name, mais est mort en retour.")
      survivor.point_de_vie = 0
   
    //} else {
    // console.log("killer.name a attaque survivor.name mais il ne s'est rien passe.")
   
   }
  }
}
  
while (jason.point_de_vie > 0 ){
    let survivor_cible = survivor.filter((survivor) => survivor.point_de_vie > 0)[Math.floor(Math.random() * 5)]
   attaquer_survivor(jason, survivor_cible);
  }
  
  
  if (jason.point_de_vie <= 0) {
    console.log("survivors ont gagne, mais RIP a" + survivor.filter((survivor) => survivor.point_de_vie > 0).map((survivor) => survivor.names).join(", "))
  } else {
    console.log("jason a survecu. Survivors ont echoue.")

    }
