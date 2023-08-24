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
 