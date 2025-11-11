/*Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou,
através do método de busca binária.*/

function adivinharNumero(alvo: number, min: number, max: number): string {
   
    if (alvo < min || alvo > max) {
        return `O número ${alvo} não está no intervalo de ${min} a ${max}.`;
    }

    let mínimo: number = min;
    let máximo: number = max;
    let palpite: number;
    let tentativas: number = 0;

   
    while (mínimo <= máximo) {
        
        palpite = Math.floor((mínimo + máximo) / 2);
        tentativas++;

        if (palpite === alvo) {
            return `O número é ${alvo}, e acertei em ${tentativas} tentativas.`;
        } else if (palpite < alvo) {
            
            mínimo = palpite + 1;
        } else {
            
            máximo = palpite - 1;
        }
    }

    return "Erro interno na lógica de busca binária.";
}

const numeroPensadoPeloUsuario: number = 42; 

const resultado: string = adivinharNumero(numeroPensadoPeloUsuario, 1, 100);

console.log(resultado);