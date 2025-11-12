//Exercício 39: Usando um laço for, crie um programa que calcule o fatorial de um número.
let numero: number = 6;
let fatorial: number = 1;

for (let i: number = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log(`O fatorial de ${numero} é: ${fatorial}`);