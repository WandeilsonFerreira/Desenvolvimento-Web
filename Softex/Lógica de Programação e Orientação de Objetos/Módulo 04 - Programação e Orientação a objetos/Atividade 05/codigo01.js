let input = require('prompt-sync')()

function maiusculaMinuscula(str){
  return console.log('A palavra digitada foi: ' + palavra + '\nMaiuscula: ' + palavra.toUpperCase() + '\nMinuscula: ' + palavra.toLowerCase())
}

var palavra = input('Digite uma palavra: ')
maiusculaMinuscula(maiusculaMinuscula)

