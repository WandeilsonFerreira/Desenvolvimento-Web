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

