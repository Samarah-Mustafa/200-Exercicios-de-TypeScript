//Exercício 23: Escreva um programa que verifica as cores de um semáforo.
type CorSemaforo = "verde" | "amarelo" | "vermelho";

let cor: CorSemaforo = "verde";

if (cor === "verde") {
    console.log("Pode passar.");
} else if (cor === "amarelo") {
    console.log("Atenção! Prepare-se para parar.");
} else if (cor === "vermelho") {
    console.log("Pare!");
} else {
    console.log("Cor inválida.");
}