/* 
    1. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany",
};

// On stocke les valeurs de l'objet dans des constantes
const { age, country, userName } = userObj;

// Donner un nom différent aux constantes

const { userName: mainName, age: exactAge, country: origin } = userObj;

// Créer des constantes par défaut, au cas où les props n'existent pas.

const { country, sport = "Football", beverage = "Beer" } = userObj; //les attributs sport et beverage etant inexistantes
//  dans l'objet auront pour valeur par defaut les valeurs definit

console.log(country);

// Combiner un nom différent et des valeurs par défaut.

const { userName: mainName = "Hanz" } = userObj;

// Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 100,
};

function foo({ num1, num2 }) {
  return num1 + num2;
}

console.log(foo(numbers));

/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat", "dog", "mouse", "lion"];

const [cat, dog] = animals; // ceci tient compte de l'ordre

// valeur par défaut et ignorer des valeurs

const fruits = ["strawberry", "grapes", "banana", "apple"];

const [strawberry, grapes, , apple] = fruits;

// affecter le reste d'un tableau

const [student, ...marks] = ["adrien", 10, 20, 30, 40, 6, 9, 33];

console.log(student); // student sera egale à adrien
console.log(marks); // affiche [10 , 20 , 30 , 40 , 6 , 9 , 33]

// Fonctionne aussi avec les strings
