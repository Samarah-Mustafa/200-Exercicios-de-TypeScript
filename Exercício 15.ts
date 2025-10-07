//Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.
function Palindromo(palavra: string): boolean {
    
    let palavraInvertida: string = palavra.split("").reverse().join("");
    
    return palavra === palavraInvertida;
}

let palavra: string = "reviver";
let outraPalavra: string = "cachorro";

if (Palindromo(palavra)) {
    console.log(palavra + " é um palíndromo.");
} else {
    console.log(palavra + " não é um palíndromo.");
}

if (Palindromo(outraPalavra)) {
    console.log(outraPalavra + " é um palíndromo.");
} else {
    console.log(outraPalavra + " não é um palíndromo.");
}