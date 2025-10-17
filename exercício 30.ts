//Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.
for (let num: number = 2; num <= 100; num++) {
    let Primo: boolean = true;
    let isPrimo: boolean = true;
    for (let i: number = 2; i < num; i++) {
        if (num % i === 0) {
            Primo = false;
            isPrimo = false;
            break;
        }
    }
    if (Primo) {
    if (isPrimo) {
        console.log(num);
    }
}