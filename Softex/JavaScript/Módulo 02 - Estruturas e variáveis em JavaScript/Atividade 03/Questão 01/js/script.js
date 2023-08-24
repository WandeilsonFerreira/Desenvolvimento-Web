const calcular = document.getElementById('calcular');

function mediaAluno(){
  var nome = document.getElementById('nome').value;
  var nota01 = document.getElementById('nota01').value;
  var nota02 = document.getElementById('nota02').value;
  var nota03 = document.getElementById('nota03').value;
  var resultado = document.getElementById('resultado');
  var n1 = Number(nota01);
  var n2 = Number(nota02);
  var n3 = Number(nota03);

  if(nome != '' && n1 != '' && n2 != '' && n3 != ''){
    const media = ((n1+n2+n3)/3).toFixed(2);
    const status = (media >=7)?"Aprovado": "Reprovado";      
    resultado.innerHTML = `O aluno <strong>${nome}</strong> possui média igual a <strong>${media}</strong> e esta <strong>${status}</strong>`;
  } else {
    alert("Preencha todos os campos!");
   }
}

calcular.addEventListener('click', mediaAluno);
