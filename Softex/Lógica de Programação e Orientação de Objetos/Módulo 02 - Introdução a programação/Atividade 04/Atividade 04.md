# Softex – Atividade 04

### Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:

1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

```
<python>
import os
mensagemErro  = "Imposivel dividir por '0'"
def calculadora (x, y, z):  
    if z == 1:
      return x + y 
    elif z == 2:
      return x - y
    elif z == 3:
      return x * y       
    elif z == 4:
      if(y==0):
        return  mensagemErro
      else:
        return x / y
    else:
      return 0

print("======== Calculadora Básica ======== ");
 
x = int(input("Digite o primeiro valor da operação: ")) 
 
y = int(input("Digite o segundo valor da operação: "))
 
z = int(input("Escolha a operação matemática: \n 1. Adição\n 2. Subtração\n 3. Multiplicação\n 4. Divisão"))

os.system('clear')
entrada = calculadora(x,y,z)
print("O resultado da operação selecionada é: ",entrada)
 
</python>
<javaScript>
let input = require('prompt-sync')()
var mensagemErro  = " ";
function calculadora (x, y, z){
  switch (z){
    case 1:
      return x + y;
      break;
    case 2:
      return x - y;
      break;
    case 3:
      return x * y;
      break;
    case 4:
      if(y==0){
        return  mensagemErro = "Imposivel dividir por '0'";
        break;
      } else {
        return x / y;
      }
      break;
    default:
      return 0;
    }
}

console.log("======== Calculadora Básica ======== ");
console.log("Digite o primeiro valor da operação: ");
var x = input();
x = parseFloat(x);

console.log("Digite o segundo valor da operação: ");
var y = input();
y = parseFloat(y);

console.log("Escolha a operação matemática: \n 1. Adição\n 2. Subtração\n 3. Multiplicação\n 4. Divisão");
var z = input();
z = parseFloat(z);
console.clear();
var entrada = calculadora(x,y,z);
console.log("O resultado da operação selecionada é: " + entrada + ".");

</javaScript>
```
