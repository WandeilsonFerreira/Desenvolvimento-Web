# JavaScipt: Módulo 03 - Atividade 02

### Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

```
<script>
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
</script>
```