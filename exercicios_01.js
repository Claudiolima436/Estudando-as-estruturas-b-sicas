// 01 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()

let numero = prompt("Digite um número inteiro:");
numero = Number(numero);

// Verifica se é par
if (numero % 2 === 0) {
    console.log("O número é par.");
}


// Verifica se é ímpar (ou seja, não é par)
if (numero % 2 !== 0) {
    console.log("O número é ímpar.");
}

// 02 - Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, 
// utilizando uma estrutura de controle if-else
let idade = prompt("Digite a sua idade:");
idade = Number(idade);
// Verifica se é criança
if (idade >= 0 && idade <= 12) {
    console.log("Você é uma criança.");
} 
// Verifica se é adolescente
else if (idade >= 13 && idade <= 17) {
    console.log("Você é um adolescente.");
}   
// Verifica se é adulto
else if (idade >= 18 && idade <= 59) {
    console.log("Você é um adulto.");
}
// Verifica se é idoso
else if (idade >= 60) {
    console.log("Você é um idoso.");
}
// Caso a idade não se encaixe em nenhuma das categorias
else {
    console.log("Idade inválida.");
}  

// 03 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if
let nota = prompt("Digite a sua nota (0 a 10):");
nota = Number(nota);
// Verifica se a nota é válida
if (nota >= 0 && nota <= 10) {
    // Verifica se é aprovado
    if (nota >= 7) {
        console.log("Aprovado");
    } 
    // Verifica se está em recuperação
    else if (nota >= 4) {
        console.log("Recuperação");
    } 
    // Se não for aprovado nem estiver em recuperação, é reprovado
    else {
        console.log("Reprovado");
    }
}
// 04 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.
let opcao = prompt("Escolha uma opção (1, 2 ou 3):");
opcao = Number(opcao);
switch (opcao) {
    case 1:
        console.log("Você escolheu a opção 1.");
        break;
    case 2:
        console.log("Você escolheu a opção 2.");
        break;
    case 3:
        console.log("Você escolheu a opção 3.");
        break;
    default:
        console.log("Opção inválida.");
}
// 05 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e 
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else
let peso = prompt("Digite o seu peso (em kg):");
peso = Number(peso);
let altura = prompt("Digite a sua altura (em metros):");
altura = Number(altura);
// Calcula o IMC
let imc = peso / (altura * altura);
// Verifica a categoria de peso
if (imc < 18.5) {
    console.log("Baixo peso");
}
else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
// 06 - Ler três valores para os lados de um triângulo: A, B e C. 
// Verificar se os lados fornecidos formam realmente um triângulo. 
// Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
let ladoA = prompt("Digite o valor do lado A:");
ladoA = Number(ladoA);
let ladoB = prompt("Digite o valor do lado B:");
ladoB = Number(ladoB);
let ladoC = prompt("Digite o valor do lado C:");
ladoC = Number(ladoC);
// Verifica se os lados formam um triângulo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("Os lados formam um triângulo.");
    // Verifica o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
}
// 07 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia,
//  e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra
let macas = prompt("Digite o número de maçãs compradas:");
macas = Number(macas);
let preco = 0;
// Verifica o preço por maçã
if (macas < 12) {
    preco = 0.30;
}
else {
    preco = 0.25;
}
// Calcula o valor total
let valorTotal = macas * preco;
console.log("Valor total da compra: R$ " + valorTotal.toFixed(2));

// 08 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente
let valor1 = prompt("Digite o primeiro valor:");
valor1 = Number(valor1);    
let valor2 = prompt("Digite o segundo valor:");
valor2 = Number(valor2);
// Verifica a ordem crescente
if (valor1 < valor2) {
    console.log("Ordem crescente: " + valor1 + ", " + valor2);
}
else {
    console.log("Ordem crescente: " + valor2 + ", " + valor1);
}

// 09 - Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 10 - Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes
let numeroInteiro = prompt("Digite um número inteiro:");
numeroInteiro = Number(numeroInteiro);
for (let i = 0; i < 10; i++) {
    console.log(numeroInteiro);
}

// 11 - Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for
let soma = 0;
for (let i = 0; i < 5; i++) {
    let numero = prompt("Digite um número:");
    numero = Number(numero);
    soma += numero;
}
console.log("Soma total: " + soma);

// 12 - Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for
let Tabuada = prompt("Digite um número para ver a tabuada:");
Tabuada = Number(Tabuada);
console.log("Tabuada do " + Tabuada + ":");
for (let i = 1; i <= 10; i++) {
    console.log(Tabuada + " x " + i + " = " + (Tabuada * i));
}
// 13 - Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números
let somaDecimal = 0;
let contador = 0;
let numeroDecimal;
do {
    numeroDecimal = prompt("Digite um número decimal (ou 0 para sair):");
    numeroDecimal = Number(numeroDecimal);
    if (numeroDecimal !== 0) {
        somaDecimal += numeroDecimal;
        contador++;
    }
}while (numeroDecimal !== 0);
if (contador > 0) {
    let media = somaDecimal / contador;
    console.log("Média aritmética: " + media);
}

// 14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while
let numeroFatorial = prompt("Digite um número para calcular o fatorial:");
numeroFatorial = Number(numeroFatorial);
let fatorial = 1;
for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
}
console.log("Fatorial de " + numeroFatorial + " é: " + fatorial);

// 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let n1 = 0, n2 = 1, proximoTermo;
console.log("Sequência de Fibonacci:");
for (let i = 1; i <= 10; i++) {
    console.log(n1);
    proximoTermo = n1 + n2;
    n1 = n2;
    n2 = proximoTermo;
}







