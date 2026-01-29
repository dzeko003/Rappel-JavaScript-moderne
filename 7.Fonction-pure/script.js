/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/

// exemple fonction pure

function add(a, b) {
  return a + b;
}

// exemple fonction impure

numbers = 70;
function add(a, b) {
  numbers++; //effet secondaire en dehors de son bloc
  return a + b;
}

console.log(add(10, 10));

// fonction impure

let VAT = 20;

function getFinalPrice(price) {
  return (price * (100 + VAT)) / 100; //VAT est une valeur mutable car elle peut changer
}

console.log(getFinalPrice(100));

// fonction pure

function getFinalPrice(price, VAT) {
  return (price * (100 + VAT)) / 100; //VAT ici fait partie de la famille
}

console.log(getFinalPrice(100, 30));
