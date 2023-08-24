# Softex – Atividade 02

### Desenvolva um código que utilize as seguintes características de um veículo:

- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.



```
<python>
import os
categoria = " "

numeroRodas = int(input('Informe a quantidade de rodas do veículo: '))

pesoBruto = int(input('Informe o peso bruto do veículo em quilogramas: '))

quantidadePessoas = int(input('Informe a quantidade de pessoas no veículo: ')) 

if(numeroRodas <= 3):
 categoria = "A"
elif ((numeroRodas == 4) & (quantidadePessoas <= 8) & (pesoBruto <= 3500)):
 categoria = "B"
elif ((numeroRodas >= 4) & (pesoBruto > 3500 & pesoBruto <6000)):
 categoria = "C"
elif ((numeroRodas >= 4) & (quantidadePessoas > 8)):
 categoria = "D"
elif ((numeroRodas >= 4) & (pesoBruto > 6000)):
 categoria = "E"
else:
 categoria = "Categoria invalida!";

os.system('clear')
print("A melhor categoria de habilitação para o veículo informado é " + categoria + "!")
</python>

<javaScript>
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

</javaScript>
```
