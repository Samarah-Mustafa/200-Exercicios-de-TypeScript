//Exercício 54: Escreva uma função que ordene um array de números em ordem decrescente.
function ordemDecrescente(array: number[]): number[] {
    return array.sort((a: number, b: number) => b - a);
}
console.log(ordemDecrescente([5, 3, 8, 1, 4]));