/* 
    Découvrons et rappelons les principales caractéristiques des déclarations let et const, et leurs différences avec le mot-clé var.
*/

/* 
    1. let & const sont block-scoped, var est function-scoped.
*/

// let et const sont arrivés avec ES6 (2015) pour offrir un meilleur contrôle de la portée des variables. ils
// sont venus remplacer var dans la plupart des cas d'utilisation, car ils permettent d'éviter des erreurs courantes liées à la portée des variables.
//  let et const block-scoped signifie qu'ils sont accessibles uniquement dans le bloc (délimité par des accolades {}) où ils sont déclarés.

function testScope() {
  if (true) {
    var functionScoped = "Je suis une variable function-scoped (var)";
    let blockScopedLet = "Je suis une variable block-scoped (let)";
    const blockScopedConst = "Je suis une variable block-scoped (const)";
  }
  console.log(functionScoped); // Accessible
  // console.log(blockScopedLet); // Erreur : blockScopedLet n'est pas défini
  // console.log(blockScopedConst); // Erreur : blockScopedConst n'est pas défini
}

// testScope();

/* 
    2. On ne peut pas déclarer de const vide, contrairement à let ou var.
*/

// const ne peut pas être déclaré sans initialisation, car il doit toujours être assigné à une valeur lors de sa déclaration.

// const myConst; // Erreur : Missing initializer in const declaration
let myLet; // Valide
var myVar; // Valide

/*
   3. On peut redéclarer des variables var sans provoquer d'erreurs.
*/

var myVar = "Première déclaration";
var myVar = "Redéclaration valide"; // Valide

// let myLet = "Première déclaration";
// let myLet = "Redéclaration invalide"; // Erreur : Identifier 'myLet' has already been declared

// const myConst = "Première déclaration";
// const myConst = "Redéclaration invalide"; // Erreur : Identifier 'myConst' has already been declared

console.log(myVar);

/* 
    4. Une variable var se fait hoisted et peut être utilisée avant sa déclaration, car elle est initialisée à undefined.
    Let & const sont hoisted mais pas initialisées.
    
    Hoisting JavaScript
    Les déclarations de fonctions et de variables sont hissées en JavaScript. Cela signifie qu'elles sont stockées dans la mémoire 
    du VO(Variables Object) du contexte d'exécution actuel et rendues disponibles dans le contexte d'exécution avant même que l'exécution du code ne commence.
*/

console.log(hoistedVar); // Affiche: undefined
var hoistedVar = "Je suis une variable hoisted (var)";

// console.log(hoistedLet); // Erreur : Cannot access 'hoistedLet' before initialization
let hoisted;
Let = "Je suis une variable hoisted (let)";

// console.log(hoistedConst); // Erreur : Cannot access 'hoistedConst' before initialization
const hoistedConst = "Je suis une variable hoisted (const)";

/* 
    5. Une variable var déclarée globalement se fait enregistrer dans l'objet global, pouvant provoquer des bugs de clash entre variables globales.
    Let et const peuvent se faire enregistrer globalement, mais sans être accessibles comme propriétés directes de window, elles sont inscrites dans l'environnement lexical de l'objet global (l'ensemble des déclarations accessibles par ce dernier).
*/
