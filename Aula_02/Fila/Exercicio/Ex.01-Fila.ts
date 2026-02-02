//Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
//1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//2: Listar todos os Clientes na fila
//3: Chamar (retirar) uma pessoa da fila 
//0: O programa deve ser finalizado. 
//Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.


import leia = require('readline-sync');

import Queue = require("../Queue");

const ordemFila: Queue<string> = new Queue<string>();

let nome: string; // Boa prática: definir o tipo
let opcao: number;

do {
    console.log('\n*************************************');
    console.log('1 - Adicionar na fila');
    console.log('2 - Mostrar a fila');
    console.log('3 - Remover da fila');
    console.log('0 - Sair');
    console.log('*************************************');

    opcao = leia.questionInt('Escolha a opcao: ');

    switch (opcao) {
        case 1:
            nome = leia.question('Digite o nome: ');
            ordemFila.enqueue(nome);
            console.log(`\nCliente ${nome} adicionado com Sucesso!`);
            break;

        case 2:
            if (ordemFila.isEmpty()) {
                console.log("\nA fila está vazia!");
            } else {
                console.log('\nClientes na fila:');
                ordemFila.printQueue();
            }
            break;

        case 3:
            if (ordemFila.isEmpty()) {
                console.log("\nA fila está vazia, não há ninguém para remover.");
            } else {
                // O método dequeue() geralmente retorna o item removido
                const removido = ordemFila.dequeue(); 
                console.log(`\nO cliente ${removido} foi chamado!`);
                console.log('Fila atualizada:');
                ordemFila.printQueue();
            }
            break;

        case 0:
            console.log('\nSistema finalizado. Até logo!');
            break;

        default:
            console.log('\nOpção inválida! Tente novamente.');
            break;
    }
} while (opcao !== 0);