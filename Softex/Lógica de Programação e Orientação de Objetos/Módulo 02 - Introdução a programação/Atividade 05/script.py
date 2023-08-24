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