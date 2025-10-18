//Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.

function isPrimo(num: number): boolean {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i: number = 1; i <= 100; i++) {
    if (isPrimo(i)) {
        console.log(i);
    }
}