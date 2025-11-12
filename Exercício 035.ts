//Exercício 35: Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2).
for (let n: number = 1; n <= 10; n++) {
    const triangular: number = n * (n + 1) / 2;
    console.log(`O ${n}º número triangular é: ${triangular}`);
}