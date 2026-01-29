/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1, 2, 3, { a: 5 }];

console.log(...array);

const shallowArrayCopy = [...array, 4, 5, 6];

console.log(shallowArrayCopy); // va afficher 555

array[3].a = 555; // l'élement a bien chagé passant de 5 à 555 les objets sont des valeurs de référence

console.log(shallowArrayCopy); // va afficher 555

const obj = {
  name: "Laura",
  age: 26,
};

const shallowObjCopy = { ...obj, dogName: "Tim" };
console.log(shallowObjCopy);

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

const shallowObjCopy2 = { ...obj, name: "Anna", age: 99 }; //On a copié l'objet puis changé son name
console.log(shallowObjCopy2);

// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court.";

const strcopyArray = [...str]; //Transforme ma chaîne en tableau de chaine de caractère

console.log(strcopyArray); // ['L' , 'e' , ' ' , 'c' , 'h' , 'a']
