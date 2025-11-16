//Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci.
function fibonacci(n: number): number {
    let a: number = 0;
    let b: number = 1;
    for (let i: number = 2; i <= n; i++) {
        let temp: number = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log(fibonacci(3));