//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
type OpcaoJogo = "pedra" | "papel" | "tesoura";

let jogarNovamente: boolean = true;
const opcoes: OpcaoJogo[] = ["pedra", "papel", "tesoura"];

const jogador: OpcaoJogo | string = "pedra"; 

let contadorRodadas: number = 0;
const MAX_RODADAS: number = 3; 

do {
    contadorRodadas++;
    const computador: OpcaoJogo = opcoes[Math.floor(Math.random() * 3)];

    console.log(`\n--- Rodada ${contadorRodadas} ---`);
    console.log(`Jogador escolheu: ${jogador}`);
    console.log(`Computador escolheu: ${computador}`);

    if (jogador === computador) {
        console.log("Resultado: Empate!");
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        console.log("Resultado: Você venceu!");
    } else if (opcoes.includes(jogador as OpcaoJogo)) {
        console.log("Resultado: Você perdeu!");
    } else {
        console.log("Resultado: Escolha inválida. Jogo cancelado.");
        jogarNovamente = false;
    }
    
    if (contadorRodadas >= MAX_RODADAS) {
        jogarNovamente = false;
    }

} while (jogarNovamente);

console.log("\nObrigado por jogar!");