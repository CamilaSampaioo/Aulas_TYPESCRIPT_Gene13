// 3) Escreva um programa para criar uma Collection Set do tipo number. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores 
// inteiros não repetidos e adicione-os individualmente na Collection Set. 
// Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 

"use strict";

//import do readLine-sync
import leia = require('readline-sync');

const numeros: Set<number> = new Set<number>();

while(numeros.size < 10) {
    numeros.add(leia.questionInt('\nDigite um numero inteiro:'));    
};

console.table(numeros);