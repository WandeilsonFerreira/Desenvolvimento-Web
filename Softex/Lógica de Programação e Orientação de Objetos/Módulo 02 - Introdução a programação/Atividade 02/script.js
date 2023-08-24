let input = require('prompt-sync')()
var categoria = " ";
console.log('Informe a quantidade de rodas do veículo: ');
var numeroRodas = input(); 

console.log('Informe o peso bruto do veículo em quilogramas: ');
var pesoBruto = input(); 

console.log('Informe a quantidade de pessoas no veículo: ');
var quantidadePessoas = input(); 

if(numeroRodas <= 3){
  categoria = "A";
} else if ((numeroRodas = 4) && (quantidadePessoas <= 8) && (pesoBruto <= 3500)){
  categoria = "B";
} else if ((numeroRodas >= 4) && (pesoBruto > 3500 && pesoBruto <6000)){
  categoria = "C";
} else if ((numeroRodas >= 4) && (quantidadePessoas > 8)){
  categoria = "D";
} else if ((numeroRodas >= 4) && (pesoBruto > 6000)){
  categoria = "E";
} else {
 categoria = "Categoria invalida!";
}
console.clear(); 
console.log("A melhor categoria de habilitação para o veículo informado é " + categoria + "!");