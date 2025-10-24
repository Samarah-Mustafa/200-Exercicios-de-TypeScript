//Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
    if (imc < 18.5) {
        return "Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso.";
    } else {
        return "Obesidade.";
    }
}

const peso: number = 75;
const altura: number = 1.78;

const imcCalculado: number = calcularIMC(peso, altura);

const situacao: string = classificarIMC(imcCalculado);

console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log("------------------------");
console.log(`IMC: ${imcCalculado.toFixed(2)}`);
console.log(`Situação: ${situacao}`);