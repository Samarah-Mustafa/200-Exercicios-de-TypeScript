//Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.
let numero: number = 18;
let minimo: number = 10;
let maximo: number = 25;

if (numero >= minimo && numero <= maximo) {
    console.log(numero + " está dentro do intervalo.");
} else {
    console.log(numero + " está fora do intervalo.");
}