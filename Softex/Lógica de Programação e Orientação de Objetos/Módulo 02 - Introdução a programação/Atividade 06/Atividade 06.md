# Softex – Atividade 06

### Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

```
<python>
  Falta concluir o codigo em Pyton
</python>

<javaScript>
var input = require('prompt-sync')() 
do{
  try {
    var nomeCompleto = input("Digite seu  nome completo: ");
    var anoNascimento = input("Digite sua data de nascimento entre 1922 e 2021: ");
    const data = new Date();
    const anoAtual = data.getFullYear();
      if (anoNascimento == " ") throw " Vazio";
      if (isNaN(anoNascimento)) throw "O ano informado não é um número";
      anoNascimento = parseInt(anoNascimento);

      if(anoNascimento >= 1922 & anoNascimento <= 2021){
        var idade = anoAtual - anoNascimento;
        console.log(`Bem vindo ${nomeCompleto} sua idade atual é: ${idade} anos`);
      }else throw "O ano informado não está compreendido no intervalo!"
    
    } catch(erro){
      console.log("erro " + erro);
  } 
}while(anoNascimento == " " | isNaN(anoNascimento) | anoNascimento < 1922 | anoNascimento > 2021);
</javaScript>
```
