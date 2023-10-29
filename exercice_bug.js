let users = ["Stephanie", "Gaia", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.length
}

users.forEach (user => {


if (countCharacter(user) > 5) {
    console.log("c'est un prenom de plus de 5 lettres.") 

} else {
    console.log ("ce n'est pas du tout un prenom long.")

    }


})
