// 1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
function limpar() {
  document.getElementById('operacao').innerHTML = ''
}

// 2. uma função tradicional com parâmetros e um retorno de valor;
function calcular() {
  var resultado = document.getElementById('operacao').innerHTML
  console.log(typeof resultado)
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
    limpar()
  } else {
    return 0
  }
}

// 3. uma arrow function com parâmetros e que retorne um valor.
inserir = num => {
  return (document.getElementById('operacao').innerHTML += num)
}

function limparTudo() {
  document.getElementById('operacao').innerHTML = ''
  document.getElementById('resultado').innerHTML = ''
}

function limparUltimo() {
  var resultado = document.getElementById('operacao').innerHTML
  document.getElementById('operacao').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}


