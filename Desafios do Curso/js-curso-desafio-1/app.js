// Desafios
/*
1- Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

2- Declare uma variável chamada nome e atribua a ela o valor "Lua".

3- Crie uma variável chamada idade e atribua a ela o valor 25.

4- Defina uma variável numeroDeVendas e atribua a ela o valor 50.

5- Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

6- Exiba um alerta com o texto "Erro! Preencha todos os campos"

7- Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

8- Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

9- Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

10- Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
*/

// Desafio 1

alert("Boas vindas ao nosso site!");

// Desafio 2

let nome = "Lua";

// Desafio 3

let idade = 25;

// Desafio 4

let numeroDeVendas = 50

// Desafio 5

let saldoDisponivel = 1000;

// Desafio 6

//alert('Erro! Preencha todos os campos');

// Desafio 7

let mensagemDeErro = 'Erro! Preencha todos os campos';
//alert(mensagemDeErro);

// Desafio 8

nome = prompt("Qual é o seu nome?");

// Desafio 9

idade = prompt("Qual é a sua idade?");

//Desafio 10

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}