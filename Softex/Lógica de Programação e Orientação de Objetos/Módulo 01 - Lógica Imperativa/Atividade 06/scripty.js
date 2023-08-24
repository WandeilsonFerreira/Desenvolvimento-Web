//https://www.npmjs.com/package/prompt-sync
let input = require('prompt-sync')()
var turmaA = 'A',
  turmaB = 'B',
  turmaC = 'C',
  turmaD = 'D'
var maiorNotaA = 0,
  maiorNotaB = 0,
  maiorNotaC = 0,
  maiorNotaD = 0
var aprovadosA = 0,
  aprovadosB = 0,
  aprovadosC = 0,
  aprovadosD = 0
var melhorAlunoA = 0,
  melhorAlunoB = 0,
  melhorAlunoC = 0,
  melhorAlunoD = 0
do {
  console.log('Selecione a Turma (A, B, C, D)')
  var turma = input()
  if (turma == 'A') {
    var numeroAlunos = 2,
      contador = 1
    while (contador <= numeroAlunos) {
      console.log('Digite o nome do ' + contador + 'º aluno: ')
      var nomeAluno = input()
      console.log('Digite a nota do aluno: ')
      var notaAluno = input()
      console.clear()
      if (notaAluno >= 7) {
        aprovadosA++
      }
      if (notaAluno > maiorNotaA) {
        maiorNotaA = notaAluno
        melhorAlunoA = nomeAluno
      }
      contador++
    }
    console.log(
      "O numero de alunos aprovados na turma 'A' foi de: " +
        aprovadosA +
        ' Aluno(s)'
    )
    console.log(
      "A maior nota da turma 'A' foi de: " +
        melhorAlunoA +
        ' com a nota ' +
        maiorNotaA
    )
    contador = 1
  } else if (turma == 'B') {
    var numeroAlunos = 2,
      contador = 1
    while (contador <= numeroAlunos) {
      console.log('Digite o nome do ' + contador + 'º aluno: ')
      var nomeAluno = input()
      console.log('Digite a nota do aluno: ')
      var notaAluno = input()
      console.clear()
      if (notaAluno >= 7) {
        aprovadosB++
      }
      if (notaAluno > maiorNotaB) {
        maiorNotaB = notaAluno
        melhorAlunoB = nomeAluno
      }
      contador++
    }
    console.log(
      "O numero de alunos aprovados na turma 'B' foi de: " +
        aprovadosB +
        ' Aluno(s)'
    )
    console.log(
      "A maior nota da turma 'B' foi de: " +
        melhorAlunoB +
        ' com a nota ' +
        maiorNotaB
    )
    contador = 1
  } else if (turma == 'C') {
    var numeroAlunos = 2,
      contador = 1
    while (contador <= numeroAlunos) {
      console.log('Digite o nome do ' + contador + 'º aluno: ')
      var nomeAluno = input()
      console.log('Digite a nota do aluno: ')
      var notaAluno = input()
      console.clear()
      if (notaAluno >= 7) {
        aprovadosC++
      }
      if (notaAluno > maiorNotaC) {
        maiorNotaC = notaAluno
        melhorAlunoC = nomeAluno
      }
      contador++
    }
    console.log(
      "O numero de alunos aprovados na turma 'C' foi de: " +
        aprovadosC +
        ' Aluno(s)'
    )
    console.log(
      "A maior nota da turma 'C' foi de: " +
        melhorAlunoC +
        ' com a nota ' +
        maiorNotaC
    )
    contador = 1
  } else if (turma == 'D') {
    var numeroAlunos = 2,
      contador = 1
    while (contador <= numeroAlunos) {
      console.log('Digite o nome do ' + contador + 'º aluno: ')
      var nomeAluno = input()
      console.log('Digite a nota do aluno: ')
      var notaAluno = input()
      console.clear()
      if (notaAluno >= 7) {
        aprovadosD++
      }
      if (notaAluno > maiorNotaD) {
        maiorNotaD = notaAluno
        melhorAlunoD = nomeAluno
      }
      contador++
    }
    console.log(
      "O numero de alunos aprovados na turma 'D' foi de: " +
        aprovadosD +
        ' Aluno(s)'
    )
    console.log(
      "A maior nota da turma 'D' foi de: " +
        melhorAlunoD +
        ' com a nota ' +
        maiorNotaD
    )
    contador = 1
  } else {
    console.log('Turma inválida')
  }
  console.log('Deseja continuar? (sim ou nao)')
  var continuar = input()
} while (continuar == 'sim')
console.clear()
var totalAlunosAprovados = aprovadosA + aprovadosB + aprovadosC + aprovadosD
console.log(
  'O número total de alunos aprovados é: ' +
    totalAlunosAprovados +
    ' alunos(as)'
)
console.log(
  "Turma 'A':\n " +
    aprovadosA +
    ' Alunos aprovados.\n ' +
    maiorNotaA +
    ' foi a maior nota, pertecente ao aluno(a): ' +
    melhorAlunoA
)
console.log(
  "Turma 'B':\n " +
    aprovadosB +
    ' Alunos aprovados.\n ' +
    maiorNotaB +
    ' foi a maior nota, pertecente ao aluno(a): ' +
    melhorAlunoB
)
console.log(
  "Turma 'C':\n " +
    aprovadosC +
    ' Alunos aprovados.\n ' +
    maiorNotaC +
    ' foi a maior nota, pertecente ao aluno(a): ' +
    melhorAlunoC
)
console.log(
  "Turma 'D':\n " +
    aprovadosD +
    ' Alunos aprovados.\n ' +
    maiorNotaD +
    ' foi a maior nota, pertecente ao aluno(a): ' +
    melhorAlunoD
)

var maiorAB = maiorNotaA > maiorNotaB ? maiorNotaA : maiorNotaB
var maiorCD = maiorNotaC > maiorNotaD ? maiorNotaC : maiorNotaD
var maiorABCD = maiorAB > maiorCD ? maiorAB : maiorCD
console.log('A maior nota da escola é: ' + maiorABCD)
