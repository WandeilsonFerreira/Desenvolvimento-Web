# Softex – Atividade 04

### Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.

### Seguindo as orientação da tutora irei utilizar a linguagem de programação Javascript para a resolução dessa atividade.
```
let input = require('prompt-sync')();
console.log("Modelo de cadastro \n");
console.log("Digite o nome do usuário: ");
var nome = input();
console.log("Digite o endereço: ");
var endereco = input();
console.log("Digite a cidade: ");
var cidade = input();
console.log("Digite o CPF: ");
var cpf = input();
console.log("Digite o RG: ");
var rg = input();
console.log("Digite a idade: ");
var idade = input();
console.log("Digite o nome do pai: ");
var nomePai = input();
console.log("Digite o nome da mãe: ");
var nomeMae = input();
console.log("Digite o peso: ");
var peso = input();
console.log("Digite renda: ");
var renda = input();

console.log("Cadastro realizado com sucesso!! \n\n");
console.log("Bem-vindo " + nome + " atualmente você reside na " + endereco + "-" + cidade + ".\n" + "Seu CPF é: " + cpf + " e RG: " + rg + ".\n" + "Voce tem " + idade + " anos de idade. Seu pai é: " + nomePai + " e sua mãe: " + nomeMae + ".\n" + "Seu peso é de: " + peso + " quilos e sua renda é de: R$ " + renda + " reais");
```