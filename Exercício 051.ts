//Exercício 51: Escreva uma função que calcule o fatorial de um número.
function fatorial(n: number): number {
    let fatorial: number = 1;
    for (let i: number = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log(fatorial(4));