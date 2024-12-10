// Desafios
/*
1- Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

2- Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

3- Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

4- Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

// Desafio 1

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafio 2

let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// Desafio 3

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

// Desafio 4

let numeroMaximo2 = prompt("Digite um número para a contagem progregressiva:");;
let contador3 = 0;

while (contador3 <= numeroMaximo2) {
    console.log(contador3);
    contador3++
}