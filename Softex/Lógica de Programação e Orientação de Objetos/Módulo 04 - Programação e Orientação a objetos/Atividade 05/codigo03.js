let input = require('prompt-sync')()
function reverse(str) {
  return console.log(str.split('').reverse().join(''))
  // split: converte a string em array, reverse: reordena o array, join: converte o array em string
}

var palavra = input('Digite uma palavra: ')
reverse(palavra)
