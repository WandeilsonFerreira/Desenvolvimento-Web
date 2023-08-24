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