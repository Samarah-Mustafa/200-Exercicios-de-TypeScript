//Exercício 16: Escreva um programa que determina o maior entre três números.
let a: number = 10;
let b: number = 2;
let c: number = 8;

if (a > b && a > c) {
    console.log("O maior número é: " + a);
} else if (b > a && b > c) {
    console.log("O maior número é: " + b);
} else {
    console.log("O maior número é: " + c);
}