//Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.
let numeroBinario: string = '111';
let numeroDecimal: number = 0;
let comprimento: number = numeroBinario.length;

for (let i: number = 0; i < comprimento; i++) {
    let digito: number = parseInt(numeroBinario[comprimento - 1 - i]);
    numeroDecimal += digito * Math.pow(2, i);
}
console.log(`O número decimal é: ${numeroDecimal}`);