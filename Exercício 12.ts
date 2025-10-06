//Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado!";
    } else if (media >= 5) {
        return "Em Recuperação.";
    } else {
        return "Reprovado.";
    }
}

let mediaAluno1: number = 8.5;
console.log(`Média ${mediaAluno1}: Situação: ${verificarSituacao(mediaAluno1)}`);

let mediaAluno2: number = 6.2;
console.log(`Média ${mediaAluno2}: Situação: ${verificarSituacao(mediaAluno2)}`);

let mediaAluno3: number = 4.9;
console.log(`Média ${mediaAluno3}: Situação: ${verificarSituacao(mediaAluno3)}`);