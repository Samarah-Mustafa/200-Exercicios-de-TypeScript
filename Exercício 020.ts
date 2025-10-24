//Exercício 20: Escreva um programa que imprima uma classificação baseada na nota de um aluno.

let nota: number = 8;

if (nota >= 9) {
    console.log("Classificação: Excelente");
} else if (nota >= 7) {
    console.log("Classificação: Bom");
} else if (nota >= 5) {
    console.log("Classificação: Regular");
} else {
    console.log("Classificação: Insuficiente");
}