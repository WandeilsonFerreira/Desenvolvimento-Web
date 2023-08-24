import enum
import os 
def votar(entrada): 
  print("Cheguei aqui")
  if (entrada == 889): 
    candidato_X = candidato_X +1
    return candidato_X

  elif (entrada == 847):
    candidato_Y += 1
    return candidato_Y 

  elif (entrada == 515):
    candidato_Z += 1
    return candidato_Z

  elif (entrada != 889) | (entrada != 847) | (entrada != 515):
    brancos += 1
    return brancos 
  else:
    invalidos += 1
    return invalidos


candidato_X = 0
candidato_Y = 0
candidato_Z = 0
entrada = 0
brancos = 0 
invalidos = 0
continuar = ""

print('Eleições 2022')
while (continuar != "nao"):
  print("Digite o número de seu candidato:\nCandidato_X => 889\nCandidato_Y => 847\nCandidato_Z => 515\n")
  numCandidato = input()
  
  if (numCandidato == ""):
    os.system('clear')
    print("Entrada " + numCandidato + " é invalida! Digite um número valido!")
  else:
    numCandidato = int(numCandidato)
    entrada = votar(numCandidato)

  continuar = input("Deseja continuar? (sim / nao) ")

print("Resultado das eleições: \n")
if (candidato_X == candidato_Y == candidato_Z):
    print("A eleição foi empatada!");
elif ((candidato_X > candidato_Y) & (candidato_X > candidato_Z)):
    print("O candidato 'A' ganhou a eleição! com: ", candidato_X ,"votos.");
elif ((candidato_Y > candidato_X) & (candidato_Y > candidato_Z)):
    print("O candidato 'B' ganhou a eleição! com: ", candidato_Y, " votos.");
elif ((candidato_Z > candidato_X) & (candidato_Z > candidato_Y)):
    print("O candidato 'C' ganhou a eleição! com: ", candidato_Z, " votos.")

print("Resultado das eleições: \n") 
print("candidato_X: ", candidato_X)
print("candidato_Y: ", candidato_Y)
print("candidato_Z: ", candidato_Z)
print("Brancos e nulos: ", (brancos + invalidos))

