# Exo 1
-  Créer une class Personne qui a comme propriétés: nom, prénom, age et taille.
-  Créer trois personnages avec des caractéristiques differentes.
-  Afficher une phrase pour chaque personnage qui affiche toutes ses caracteristiques.

# Exo 1.1
-  Créer une methode dans la class Personne qui affiche toutes ses caracteristiques du personnage dans une phrase

# Exo 2
-  Créer une class Personnage avec comme propriétés : 
age , nom , ville
Faire 2 instances de cette class.

# Exo 2.1
- Rajouter la method sePresenter à la class Personnage qui console.log "Bonjour, je m'appelle [nom-de-la-personne] !"
Lancer cette méthode sur les deux instances de l'exo2

# Exo3
- Traduire le code suivant en class et en instances

- lieux
let maison = {
  nom: "maison",
  contenu: [],
};
let epicerie = {
  nom: "epicerie",
  contenu: [],
  ingredients: [],
};
let cuisine = {
  nom: "cuisine",
  contenu: [],
  ingredients: [],
};

- ingredients
let poivron = {
  nom: 'poivron',
  etat: 'entier',
  prix:  1 ,
 };
 let oignon = {
  nom: 'oignon',
  etat: 'entier',
  prix:  2 ,
 };
 let oeuf = {
  nom: 'oeuf',
  etat: 'entier',
  prix:  4 ,
 };
 let epice = {
  nom: 'epice',
  etat: 'moulu',
  prix:  3.25 ,
 };
 let paprika = {
  nom: 'paprika',
  etat: 'moulu',
  prix:  1.5 ,
 };
 let fromage = {
  nom: 'fromage',
  etat: 'coupé',
  prix:  1.6 ,
 };

- Personne
let personnage = {
 nom: "Maxime",
 lieu: "néant",
 argent: 100,
 panier: [],
 se_deplacer(x){
 },

 payer(x){
 },
 couper(x,y){
 }
}

# Exo4

- Créer une class Objet
_Propriétés : nom, prix

- Créer deux instances d'objets avec un nom et un prix
Créer une boite (tableau) et mettre les deux objets dedans.

- Créer une class Personnage
_Propriétés : nom(string), sac(tableau), argent(number)
_Méthode : prendre(objet)
_Méthode : acheter(vendeur, objet)

- Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
Ensuite faites acheter à l'un des deux, l'objet de l'autre.