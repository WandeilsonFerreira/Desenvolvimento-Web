# Softex – Atividade 05

### Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:

1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

```
<python>
import os 
mensagemErro = "Imposivel dividir por '0'"
mensagem = ""
def calculadora(x, y, z):
  
    if z == 1:
      return x + y
    
    elif z == 2:
      return x - y
    
    elif z == 3:
      return x * y

    elif z == 4:
      if y == 0:
        return mensagemErro
      else:
        return x / y

 
print('======== Programa Calculadora Básica ======== ')
while (mensagem != 'nao'):
  z = int(input('Escolha a operação matemática: \n1: Adição\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair\n'))  
  os.system('clear')
  if z == 0:
    os.system('clear')
    print('Até mais!!')
    break
  elif z > 4:
    print('Entrada inválida')
  else :    
    x = float(input("Digite o primeiro valor da operação: "))
    y = float(input("Digite o segundo valor da operação: "))    
    os.system('clear')
    entrada = calculadora(x, y, z)
    print("O resultado da operação selecionada é: ",entrada, '.')     
    mensagem = input("Deseja continuar? (sim ou nao)") 
</python>
<javaScript>  
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

</javaScript>
```
