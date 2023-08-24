let input = require('prompt-sync')()
console.log('Informe a quantidade de segundos para explosão: ');
let tempoExplosao = input(); 
console.log("iniciando contagem regressiva!"); 
let interval = setInterval(() =>{
  console.log("Restam " + tempoExplosao + " segundos para a explosão!");
  tempoExplosao--;  
  if (tempoExplosao == 0){
    console.log("BUM!")
    clearInterval(interval);
  }
}, 1000);
console.clear();