# Softex – Atividade 05

### Elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual meio de transporte o usuário está pensando.

### O usuário deverá escolher uma das seguintes opções:

- Trator
- Moto
- Bicicleta
- Trem
- Carro
- Caminhão
- Ônibus
- Paraquedas
- Balão
- Avião
- Helicóptero
- Submarino
- Barco
- Navio
- Lancha

Para chegar ao resultado, só devem ser usadas perguntas que retornem "Sim" ou "Não".

Exemplo:
É terrestre? Sim.
Cabe apenas uma pessoa? Sim.
É pesado? Não.
Tem pedal? Sim.
Então, o transporte escolhido foi a bicicleta.

Seguindo as orientação da tutora irei utilizar a linguagem de programação Javascript para a resolução dessa atividade.

```
<script>


//Importação da biblioteca
let input = require('prompt-sync')();
var terrestre = " ", aereo = " ", aquatico = " ";
  console.log("O meio de transporte é terrestre?(sim ou nao)");
  var terrestre = input();
  if(terrestre == "sim"){
    console.log("Cabe apenas uma pessoa? (sim ou nao)");
    var cabeApenasUmaPessoa = input();
    if(cabeApenasUmaPessoa == "sim"){
      console.log("É pesado? (sim ou nao)");
      var epesado = input();
      if (epesado == "sim"){
        console.log("Então, o transporte escolhido foi o TRATOR");
      }else{
        console.log("Tem pedal? (sim ou nao)");
        var temPedal = input();
        if (temPedal == "sim"){
          console.log("Então, o transporte escolhido foi a BICILETA");
        }
      }
    } else if(cabeApenasUmaPessoa == "nao"){
      console.log("Usa capacete? (sim ou nao)");
      var usaCapacete = input();
      if(usaCapacete == "sim"){
      console.log("Então, o transporte escolhido foi a MOTO");

    } else if(usaCapacete == "nao"){
      console.log("Tem passageiro? (sim ou nao)");
      var temPassageiro = input();
      if(temPassageiro == "sim"){
        console.log("Usa trilhos? (sim ou nao)");
        var usaTrilhos = input();
        if (usaTrilhos == "sim"){
          console.log("Então, o transporte escolhido foi o TREM");
        } else{
          console.log("Anda na pista? (sim ou nao)");
          var andaNaPista = input();
          if(andaNaPista == "sim"){
            console.log("É alto? (sim ou nao)");
              var ealto = input();
              if(ealto == "sim"){
                console.log("Usa carroceria? (sim ou nao)");
                var usaCarroceria = input();
                if(usaCarroceria == "sim"){
                  console.log("Então, o transporte escolhido foi o CAMINHÃO");
                } else if(usaCarroceria == "nao") {
                  console.log("Pode ter cobrador? (sim ou nao)");
                  var podeTerCobrador = input();
                  if (podeTerCobrador == "sim"){
                      console.log("Então, o transporte escolhido foi o Ônibus");
                  }
                }
              }else{
                console.log("É veiculo leve? (sim ou nao)");
                var eVeiculoLeve = input();
                if (eVeiculoLeve == "sim"){
                   console.log("Então, o transporte escolhido foi o CARRO");
                }
              }
          }
        }
      }
      else{
        console.log("Não é um veiculo terrestre!")
      }
    }
  }
    //fim de terrestre
    } else if (terrestre == "nao"){
    console.log("O meio de transporte é aereo?(sim ou nao)");
    var aereo = input();
    if(aereo == "sim"){
    console.log("Precisa pular?(sim ou nao)");
      var precisaPular = input();
      if (precisaPular == "sim"){
        console.log("Então, o transporte escolhido foi a ASA DELTA");
      } else{
        console.log("O meio de transporte viaja dentro? (sim ou nao)");
        var viajaDentro = input();
        if (viajaDentro == "sim"){
          console.log("É devagar? (sim ou nao)");
          var eDevagar = input();
          if(eDevagar == "sim"){
            console.log("Então, o transporte escolhido foi o BALÃO")
          } else {
            console.log("Tem piloto? (sim ou nao)");
            var temPiloto = input();
            if (temPiloto == "sim"){
              console.log("Possui asas fixas? (sim ou nao)");
              var possuiAssasFixas = input();
              if (possuiAssasFixas == "sim"){
                console.log("Então, o transporte escolhido foi o AVIÃO");
              } else{
                console.log("Faz voo vertical? (sim ou não)");
                var fazVooVertical = input();
                if (fazVooVertical == "sim"){
                  console.log("Então, o transporte escolhido foi o HELICOPTERO");
                }
              }
            }
          }
        }
      }
    //fim de aereo
    } else if (aereo == "nao") {
    console.log("O meio de transporte é aquatico?(sim ou nao)");
    var aquatico = input();
    if(aquatico == "sim"){
    console.log("É coberto d'agua? (sim ou nao)");
    var eCobertoDagua = input();
    if (eCobertoDagua == "sim"){
      console.log("Então, o transporte escolhido foi o SUBMARINO");
    } else{
      console.log("Navega na agua? (sim ou nao)");
      var navegaNaAgua = input();
      if (navegaNaAgua == "sim"){
        console.log("Possui vela? (sim ou nao)");
        var possuiVela = input();
        if(possuiVela == "sim"){
          console.log("Então, o transporte escolhido foi o BARCO");
        } else{
          console.log("Tem motor? (sim ou nao)");
          var temMotor = input();
          if (temMotor == "sim"){
            console.log("É alto? (sim ou nao)");
            var eAlto = input();
            if (eAlto == "sim"){
              console.log("Então, o transporte escolhido foi o NAVIO");
            }else{
              console.log("Pode ser descoberto? (sim ou nao)");
              var podeSerDescoberto = input();
              if (podeSerDescoberto == "sim"){
                 console.log("Então, o transporte escolhido foi  LANCHA");
              }

            }
          }
        }
      }

    }
    //fim de aquatico
    }else{
    console.log("Meio de transporte invalido");
    }
  }
 }
</script>
```
