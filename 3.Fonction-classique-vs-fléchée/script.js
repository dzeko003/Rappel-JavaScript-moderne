/* 
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/

/* 
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument, notamment en tant que fonction callback.
*/

add(2, 3); // Affiche: 5
// Cette fonction classique a un nom add et peut être appelée avant sa déclaration grâce au hoisting.
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Affiche erreur: addArrow is not defined
// Fonction fléchée stockée dans une constante. Elle ne peut pas être appelée avant sa déclaration. et n'a pas de nom.
const addArrow = (a, b) => a + b;

numbers = [1, 2, 3, 4, 5];

// Utilisation en tant que callback avec une fonction classique.
const doubledClassic = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledClassic); // Affiche: [2, 4, 6, 8, 10]

// Utilisation en tant que callback avec une fonction fléchée.
const doubledArrow = numbers.map((number) => number * 2);
console.log(doubledArrow); // Affiche: [2, 4, 6, 8, 10]

numbers.forEach((number) => {
  return console.log(number);
});

/* 
    2. Le mot clé this.

    Les fonctions classiques créent un mot clé this lors de leur exécution, en fonction de l'objet qui les appelle.
    Si elles ne sont pas appelées par un objet, this est automatiquement égal à window (l'objet global).

    Les fonctions fléchées ne créent pas de this, néanmoins elles peuvent lire le this d'une fonction classique si elles se situent dedans.
    Si elles ne sont pas dans l'environnement(donc contexte) une fonction classique, elle lisent le this de l'objet global, car elles sont dans le contexte d'execution global.
*/

const objClassic = {
  name: "Objet Classique",
  getName: function () {
    console.log(this.name); // this fait référence à objClassic
  },
};

objClassic.getName(); // Affiche: Objet Classique

const objArrow = {
  name: "Objet Fléché",
  getName: () => {
    console.log(this.name); // this fait référence à l'objet global (window)
  },
};

objArrow.getName(); // Affiche: undefined (car window.name est généralement undefined)

/* Exemple avec fonction classique imbriquée */
const objWithNestedClassic = {
  name: "Objet avec Fonction Classique Imbriquée",
  getName: function () {
    const nestedFunction = function () {
      console.log(this.name); // this fait référence à l'objet global (window)
    };
    nestedFunction();
  },
};

objWithNestedClassic.getName(); // Affiche: undefined

/* Exemple avec fonction fléchée imbriquée */
const objWithNestedArrow = {
  name: "Objet avec Fonction Fléchée Imbriquée",
  getName: function () {
    const nestedArrowFunction = () => {
      console.log(this.name); // this fait référence à objWithNestedArrow
    };
    nestedArrowFunction();
  },
};

objWithNestedArrow.getName(); // Affiche: Objet avec Fonction Fléchée Imbriquée

/* 
    3. arguments
    Même chose pour l'objet "arguments" qui est crée chez les fonctions classiques, mais pas les fonctions fléchées.
*/

function classicFunction() {
  console.log(arguments); // Affiche les arguments passés à la fonction
}

classicFunction(1, 2, 3); // Affiche: [1, 2, 3]

const arrowFunction = () => {
  // console.log(arguments); // Erreur : arguments n'est pas défini
};

arrowFunction(1, 2, 3); // Affiche erreur: arguments is not defined

/*
    Petit recap pour vous aider avec la valeur de this dans des fonctions classiques vs fléchées (hors fonction constructeur / usestrict)

    Fonction classique : 
    1. La fonction est appelée depuis un objet ? this = cet objet.
    2. La fonction n'est pas appelée depuis un objet ? this = objet global window.

    Fonction fléchée :
    1. La fonction fléchée se situe dans une fonction classique ? this = le this de la fonction classique.
    2. La fonction fléchée ne se situe pas dans une fonction classique ? this = objet global window.
*/

/*
    En résumé, utilisez les fonctions fléchées pour les callbacks et les fonctions anonymes, et les fonctions classiques lorsque vous avez besoin d'un this dynamique ou de l'objet arguments.
*/
