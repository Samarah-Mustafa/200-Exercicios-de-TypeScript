//Exercício 21: Escreva um programa que determina a estação do ano com base no mês.

let mes: number = 9;
let estacao: string;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacao = "Verão";
        break;
    case 3:
    case 4:
    case 5:
        estacao = "Outono";
        break;
    case 6:
    case 7:
    case 8:
        estacao = "Inverno";
        break;
    case 9:
    case 10:
    case 11:
        estacao = "Primavera";
        break;
    default:
        // Cobre qualquer número fora do intervalo 1-12
        estacao = "Mês inválido";
}

console.log("Estação do ano: " + estacao);