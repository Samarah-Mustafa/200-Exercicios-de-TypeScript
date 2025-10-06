//Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.

let idade: number = 17;

console.log("Idade:", idade);

if (idade < 16) {
    console.log("Não pode votar.");
} else if (idade >= 18 && idade <= 70) {
    console.log("Voto obrigatório.");
} else {
   
    console.log("Voto opcional.");
}