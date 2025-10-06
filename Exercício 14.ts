//Exercício 14: Escreva um programa que verifica se um ano é bissexto.

function isBissexto(ano: number): boolean {
  
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

let ano1: number = 2024;
let ano2: number = 2023;
let ano3: number = 2000;
let ano4: number = 1900;

console.log(`Ano ${ano1} é bissexto? ${isBissexto(ano1)}`);
console.log(`Ano ${ano2} é bissexto? ${isBissexto(ano2)}`);
console.log(`Ano ${ano3} é bissexto? ${isBissexto(ano3)}`);
console.log(`Ano ${ano4} é bissexto? ${isBissexto(ano4)}`);