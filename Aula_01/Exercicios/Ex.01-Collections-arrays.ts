// 1) Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las 
// individualmente no Array. Em seguida, faça o que se pede:
// * Mostre na tela todas as cores adicionadas. 
// * Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

"use strict";

//import do readLine-sync
import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for(let i = 0; i < 5; i++) {
  cores[i] = leia.question('Digite uma cor: ');
};

console.log('Cores adicionadas:');

console.table(cores);

cores.sort();

console.log('Cores em ordem Crescente:');

console.table(cores);
