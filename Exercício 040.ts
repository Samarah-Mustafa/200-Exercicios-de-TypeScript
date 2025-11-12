//Exercício 40: Usando um laço while, crie um programa que inverta uma string.
let string: string = "Hello, World!";
let stringInvertida: string = "";
let i: number = string.length - 1;

while (i >= 0) {
    stringInvertida += string[i];
    i--;
}

console.log(`A string invertida é: ${stringInvertida}`);