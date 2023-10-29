let music =["black to back","toxic","escapism","pokerface","anissa"]

class Name {
    constructor(john, point_de_vie) {
        this.john = john;
        this.point_de_vie = point_de_vie;
    }
}

let feu_rouge = 30

let taxi = 10

let personnage = new Name ("john", 10)

while (feu_rouge > 0 && personnage.point_de_vie > 0){
    let chanson_en_cours = (Math.floor(Math.random() * music.length))
    if (chanson_en_cours == 4) {
        personnage.point_de_vie --
        taxi --
    }
    feu_rouge -- 
    console.log ("la music en cours est " + music[chanson_en_cours] + ". il y a encore " + feu_rouge + " feux rouges")
}

if (personnage.point_de_vie > 0 ){
    console.log(personnage.john + " arrive a destination le nombre de taxi restant est " + taxi)
    } else {
        console.log (personnage.john + "explose!")
        
    }


