let input = require('prompt-sync')()

console.log('Digite o nome do aluno: ')
var nomeAluno = input()

console.log('Digite a primeira nota: ')
var notaUm = input()

console.log('Digite a segunda nota: ')
var notaDois = input()

console.log('Digite o numero de faltas: ')
var quantidadeFaltas = input()

var calcMedia = (Number(notaUm) + Number(notaDois)) / 2

var media = calcMedia < 7 ? 'Reprovado' : 'Aprovado'
var faltas = quantidadeFaltas > 3 ? 'Reprovado' : 'Aprovado'
var status =
  (media == 'Aprovado') & (faltas == 'Aprovado') ? 'Aprovado' : 'Reprovado'

console.clear()
console.log('O aluno ' + nomeAluno + ' está ' + status)
