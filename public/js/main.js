// EXO 1

// console.log("_____1_____");

// class Personne {
//     constructor (nom, prenom, age, taille) {
//         this.nom = nom
//         this.prenom = prenom
//         this.age = age
//         this.taille = taille
//     }
//     saluer() {
//         console.log(`Bonjour je suis ${this.prenom} ${this.nom}, j'ai ${this.age} ans et je mesure ${this.taille} cm.`);
//     }
// }

// let saliou = new Personne('Lemaire', 'saliou', 25, 195)
// let adrien = new Personne('Vervekken', 'Adrien', 25, 193)
// let sebastien = new Personne('Nothomb', 'Sebastien', 25, 180)

// adrien.saluer();

// EXO 2

// console.log("_____2_____");

// class Personnage {
//     constructor (nom, age, ville) {
//         this.nom = nom
//         this.age = age
//         this.ville = ville
//     }
//     sePresenter = () => {
//         console.log(`Bonjour, je m'appelle ${this.nom}`);
//     }
// }

// let nicolas = new Personnage('Barriol', 24, 'Marseille')
// let simon = new Personnage('Lesens', 25, 'Beersel')

// nicolas.sePresenter();
// simon.sePresenter();

// // EXO 3

console.log("_____3_____");

class Lieux {
    constructor (nom, contenu, ingredients) {
        this.nom = nom
        this.contenu = contenu
        this.ingredients = ingredients
    }
}

let maison = new Lieux('maison', [], [])
let epicerie = new Lieux('epicerie', [], [])
let cuisine = new Lieux('cuisine', [], [])

console.log(maison);

class Ingrediens {
    constructor (nom, etat, prix) {
        this.nom = nom
        this.etat = etat
        this.prix = prix
    }
}

let poivron = new Ingrediens('poivron', 'entier', 1)
let oignon = new Ingrediens('oignon', 'entier', 2)
let oeuf = new Ingrediens('oeuf', 'entier', 4)
let epice = new Ingrediens('epice', 'moulu', 3.25)
let paprika = new Ingrediens('paprika', 'moulu', 1.5)
let fromage = new Ingrediens('fromage', 'coupé', 1.6)

console.log(oeuf);

class Personne {
    constructor (nom, lieu, argent, panier) {
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.panier = panier
    }
    seDeplacer = (lieu) => {
        this.lieu = lieu.nom
        lieu.contenu.push(this)
        console.log(`${this.nom} se déplace vers ${lieu.nom}`);
    }
    payer = (ingredient) => {
        if (this.argent >= ingredient.prix) {
            this.argent -= ingredient.prix
            this.panier.push(ingredient)
            console.log(`Mon panier : ${this.panier} \n argent restant = ${this.argent}`);
        } else {
            console.log("Solde insuffisant");
        }
    }
    couper = (ingredient) => {
        ingredient.etat = "coupé"
        console.log(`${ingredient.nom} est maintenant ${ingredient.etat}`);
    }
}

let maxime = new Personne ('maxime', 'nean', 100, [])
console.log(maxime);

maxime.seDeplacer(maison)
maxime.payer(oeuf)
maxime.couper(oeuf)

// EXO 4

console.log("_____4_____");

class Objet {
    constructor (nom, prix) {
        this.nom = nom
        this.prix = prix
    }
}

let horloge = new Objet('horloge', 30)
let porte = new Objet('porte', 50)
let boite = [horloge, porte]

class Personnage {
    constructor (nom, sac, argent) {
        this.nom = nom
        this.sac = [sac]
        this.argent = argent
    }
    prendre = (objet) => {
        this.sac.push(objet)
        boite.splice(boite.indexOf(objet), 1)
    }
    acheter = (vendeur, objet) => {
        this.argent -= objet.prix
        vendeur.argent += objet.prix

        this.sac.push(objet)
        vendeur.sac.splice(vendeur.sac.indexOf(objet), 1)
    }
}

let alex = new Personnage ('alex', [], 800) 
let louise = new Personnage ('louise', [], 1000)

alex.prendre(porte)
louise.acheter(alex, porte)

console.log(alex);
console.log(boite);
console.log(louise);