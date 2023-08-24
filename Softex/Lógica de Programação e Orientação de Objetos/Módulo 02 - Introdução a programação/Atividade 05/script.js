let input = require('prompt-sync')()
var mensagemErro = ' '
function calculadora(x, y, z) {
  switch (z) {
    case 1:
      return x + y
      break
    case 2:
      return x - y
      break
    case 3:
      return x * y
      break
    case 4:
      if (y == 0) {
        return (mensagemErro = "Imposivel dividir por '0'")
        break
      } else {
        return x / y
      }
      break
  }
}
var mensagem = ' '
console.log('======== Programa Calculadora Básica ======== ')
do {
  console.log(
    'Escolha a operação matemática: \n1: Adição\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n'
  )
  var z = input()
  z = parseFloat(z)
  console.clear()
  if (z == 0) {
    console.clear()
    console.log('Até mais!!')
    break
  } else if (z > 4) {
    console.log('Entrada inválida')
  } else {
    console.log('Digite o primeiro valor da operação: ')
    var x = input()
    x = parseFloat(x)
    console.log('Digite o segundo valor da operação: ')
    var y = input()
    y = parseFloat(y)
    console.clear()
    var entrada = calculadora(x, y, z)
    console.log('O resultado da operação selecionada é: ' + entrada + '.')
    console.log('Deseja continuar? (sim ou nao)')
    mensagem = input()
  }
} while (mensagem != 'nao')
