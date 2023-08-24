const calcular = document.getElementById('calcular');
function calculoDistancia(){ 
  var qtdExplosivo  = document.getElementById('qtdExplosivo').value;
  var gramatura = document.getElementById('qtdGramatura').value;
  var fr = document.getElementById('fatoRelatividade').value;

  var largura = document.getElementById('largura').value;
  var altura = document.getElementById('altura').value;
  var profundidade = document.getElementById('profundidade').value;



  var resultado = document.getElementById('resultado');
  var psi = document.getElementById('psi');

  if(qtdExplosivo != '' && gramatura != '' && fr !=''){
    var ple = qtdExplosivo * gramatura;
    var pleTnt = ple * fr;
    var pleTntLibras = (pleTnt/453);     
    var distanciaPes= (18 * Math.cbrt(pleTntLibras))  ;
    var distanciaMetros = distanciaPes * 0.32;
    var pressaoInterna = 2410*(pleTntLibras/(altura*largura*profundidade))*0.72;
    
    resultado.innerHTML = `A distância segura é de <strong> ${distanciaMetros.toFixed(2)}</strong> metros aproximadamente.<br><br>Com a utilização do escudo: <strong> ${(distanciaMetros*0.5).toFixed(2)}</strong> metros aproximadamente.<br><br> A presesão interna é de <strong>${(pressaoInterna).toFixed(2)}</strong> p.s.i`;

    if(pressaoInterna >.00 && pressaoInterna  < 5.0){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>Valores inferiores a 5 p.s.i não causam danos auditivos </strong>`
    }
    else if(pressaoInterna = 5.0){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>Limite para danos auditivos</strong>`
    }
    else if (pressaoInterna >5.0 && pressaoInterna <= 15.0){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>50% perda auditiva</strong>`
    }
    else if (pressaoInterna > 15.0 && pressaoInterna <= 40.0){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>Possível chance de danos pulmonais</strong>`
    }
    else if (pressaoInterna > 40.0 && pressaoInterna <= 80.0){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>50% de possibilidade de danos severos aos pulmões</strong>`;
    }
    else if (pressaoInterna > 80.0 && pressaoInterna <= 200.0){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>Possível chace de morte</strong>`;
    }
    else if (pressaoInterna > 200.0 ){
      psi.innerHTML = `Efeito da pressão sobre o corpo: <br><strong>Morte</strong>`
    }
    else{
      psi.innerHTML = `Nivel de pressão interna com valores extremos: ${pressaoInterna}   `
    }   
        
  } else {
    alert("Preencha todos os campos!");
  }
  calcular.addEventListener('click', calculoDistancia);

}

 
