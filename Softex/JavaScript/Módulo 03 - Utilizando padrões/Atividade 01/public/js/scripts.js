function inserir(num){
  document.getElementById('operacao').innerHTML += num;
}

function limpar(){
  document.getElementById('operacao').innerHTML = "";
}

function limparTudo(){
  document.getElementById('operacao').innerHTML = "";
  document.getElementById('resultado').innerHTML = "";
}

function limparUltimo(){
  var resultado = document.getElementById('operacao').innerHTML;   
  document.getElementById('operacao').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
  var resultado = document.getElementById('operacao').innerHTML;
  console.log(typeof(resultado));
  if (resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
    limpar();
  }else{
    return
  }
}
 
