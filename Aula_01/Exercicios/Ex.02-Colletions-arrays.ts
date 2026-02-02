//Escreva um programa para criar uma Collection Array do tipo number, inicializada 
//com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via 
//teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição 
//deste  número  na  Collection.  Caso  o  número  não  seja  encontrado,  o  programa 
//deverá exibir na tela a mensagem: O número NN não foi encontrado!

import readline = require('readline-sync');

const numeros: Set<number> = new Set<number>();

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let valor of valores) {
    numeros.add(valor);
}

const entrada = readline.questionInt('Digite um numero: ');

let verifica = numeros.has(entrada);

if (verifica) {
    console.log(`O número ${entrada} foi encontrado!`);
} else {
    console.log(`O número ${entrada} não foi encontrado!`);
}