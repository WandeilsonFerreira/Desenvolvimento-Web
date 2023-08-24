const calcular = document.getElementById('calcular');

function mediaAluno(){
  var nome = document.getElementById('nome').value;
  var nota01 = document.getElementById('nota01').value;
  var nota02 = document.getElementById('nota02').value; 
  var resultado = document.getElementById('resultado');
  var n1 = Number(nota01);
  var n2 = Number(nota02);
 
  if(nome != '' && n1 != '' && n2 != ''){
    const totalPontos = ((n1+n2)).toFixed(2);
    const faltaPontos = 21 - totalPontos;      
    resultado.innerHTML = `O aluno <strong>${nome}</strong> precisa de <strong>${faltaPontos}</strong> para atingir a média 7`;
  } else {
    alert("Preencha todos os campos!");
   }
}

calcular.addEventListener('click', mediaAluno);
