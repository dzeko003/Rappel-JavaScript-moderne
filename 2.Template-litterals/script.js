/* 
  Les "template literals" ou "template strings" sont des chaînes utilisant une syntaxe extrêmement pratique.
  
  On peut les utiliser pour :
  - Intégrer des expressions JS à une chaîne
  - Intégrer des sauts de ligne
  - Concaténer des chaînes
  - Créer des templates (morceau de code).

  On crée un gabarit(traduction fr) en utilisant les backticks ``.
  Pour intégrer une expression, on utilise la syntaxe ${expression} entre les backticks.
*/

/* Ajout d'expression */

const name = "Alice";
const age = 30;
const greeting = `Bonjour, je m'appelle ${name} et j'ai ${age} ans.`;
console.log(greeting); // Affiche: Bonjour, je m'appelle Alice et j'ai 30 ans.

/* Saut de ligne */

const multiLine = `Ceci est une chaîne
qui s'étend sur
plusieurs lignes.`;
console.log(multiLine);

/* Utilisation de l'expression retournée par une fonction. */

function getFavoriteColor() {
  return "bleu";
}

const favoriteColorMessage = `Ma couleur préférée est ${getFavoriteColor()}.`;
console.log(favoriteColorMessage); // Affiche: Ma couleur préférée est bleu.
