//Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.
let numeroDecimal: number = 7;
let numeroBinario: string = '';

do {
    numeroBinario = (numeroDecimal % 2) + numeroBinario;
    numeroDecimal = Math.floor(numeroDecimal / 2);
} while (numeroDecimal > 0);

console.log(`O número binário é: ${numeroBinario}`);