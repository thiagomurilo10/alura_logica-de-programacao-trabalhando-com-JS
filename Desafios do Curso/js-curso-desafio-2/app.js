// Desafios
/*
1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

2- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

3- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

4- Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

5- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

// Desafio 1

let diaDaSemana = prompt("Qual é o dia da semana?");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// Desafio 2

let numero = parseInt(prompt("Digite um número: "));

if (numero < 0) {
    alert("Este número é negativo");
} else {
    alert("Este número é positivo");
}

// Desafio 3

let pontuação = 100;

if (pontuação >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// Desafio 4

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

// Desafio 5

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);
