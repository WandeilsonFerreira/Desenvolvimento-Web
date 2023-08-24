function enviar(){
  var nome = document.getElementById("nome").value;
  var endereço = document.getElementById("endereço").value;
  var cidade = document.getElementById("cidade").value;
  var cpf = document.getElementById("cpf").value;
  var rg = document.getElementById("rg").value;
  var idade = document.getElementById("idade").value;
  var pai = document.getElementById("pai").value;
  var mae = document.getElementById("mae").value;
  var peso= document.getElementById("peso").value;
  var renda = document.getElementById("renda").value; 

   
  return document.getElementById("resultado").innerHTML += "Bem - vindo " + nome + "<br> Seguem suas informações Pessoais: <br>" + nome + "<br>" + endereço + "<br>" + cidade + "<br>" + cpf + "<br>" + rg + "<br>" + idade + "<br>" + pai + "<br>" + mae + "<br>" + peso + "<br> R$ " + renda + "<br>";
   
}