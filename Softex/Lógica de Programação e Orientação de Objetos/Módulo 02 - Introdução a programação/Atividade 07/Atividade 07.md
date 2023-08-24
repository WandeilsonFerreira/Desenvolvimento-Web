# Softex – Atividade 07

### Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos 


Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

```
<python>
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


</python>

<javaScript>
var input = require('prompt-sync')()
var candidato_X = 10; var candidato_Y = 50; var candidato_Z = 300; var brancos = 0; var invalidos = 0;
var continuar = "";
function votar(entrada) {  
  switch (entrada) {
    case 889:
      return candidato_X++;
      break;
    case 847:
      return candidato_Y++;
      break;
    case 515:
      return candidato_Z++;
      break;
    case (entrada != 889) | (entrada != 847) | (entrada != 515):
      return brancos++;
      break;
    default:
      return invalidos++;
      break;
  }
}

console.log('Eleições 2022');
while (continuar != "nao") {
  console.log("Digite o número de seu candidato:\nCandidato_X => 889\nCandidato_Y => 847\nCandidato_Z => 515\n");
  var numCandidato = input();
  
  if (isNaN(numCandidato)){
    console.clear()
    console.log("Entrada " + numCandidato + " é invalida! Digite um número valido!");
  } else { 
    numCandidato = parseInt(numCandidato);
    var entrada = votar(numCandidato) 
  }
  continuar = input("Deseja continuar? (sim / nao) ")
}

console.log("Resultado das eleições: \n");
if (candidato_X == candidato_Y == candidato_Z) {
    console.log("A eleição foi empatada!");
} else if ((candidato_X > candidato_Y) & (candidato_X > candidato_Z)) {
    console.log("O candidato 'A' ganhou a eleição! com: " + candidato_X + " votos.");
} else if ((candidato_Y > candidato_X) & (candidato_Y > candidato_Z)) {
    console.log("O candidato 'B' ganhou a eleição! com: " + candidato_Y + " votos.");
} else if ((candidato_Z > candidato_X) & (candidato_Z > candidato_Y)) {
    console.log("O candidato 'C' ganhou a eleição! com: " + candidato_Z + " votos.");
} 

console.log("candidato_X: " + candidato_X);
console.log("candidato_Y: " + candidato_Y);
console.log("candidato_Z: " + candidato_Z);
console.log("Brancos e nulos: " + (brancos + invalidos));


</javaScript>
```
