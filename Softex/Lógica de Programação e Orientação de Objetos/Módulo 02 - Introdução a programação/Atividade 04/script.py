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
 