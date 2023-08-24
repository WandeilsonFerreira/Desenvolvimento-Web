# JavaScipt: Módulo 04 - Atividade 01

### Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:

- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.

```
function Banco (cliente, conta, saldo, tipoConta, agencia){
  this.cliente = cliente;
  this.conta = conta;
  this.saldo = saldo;
  this.tipoConta = tipoConta;
  this.agencia = agencia;

  this.buscarSaldo = function (){
    // this.saldo;
     console.log(`O saldo atual de ${this.cliente} é de: R$ ${this.saldo} reais`);
  }

  this.deposito = function (valor){
     this.saldo += valor;
     console.log(`O deposito de R$ ${valor} reais foi realizado com sucesso!`);
  }

  this.saque = function (valor){
    if(this.saldo < valor){
      console.log('Saldo indisponivél!')
      return false
    }else{
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} reais realizado com sucesso!`);
    }
  }

  this.numeroConta = function (){
    console.log(`A cliente ${this.cliente} possui conta de numero: ${this.conta}`)
  }
}

var cliente01 = new Banco('Maria', 51423, 0, 'Poupança', "498-3");
var cliente02 = new Banco('José', 58960, 0, 'Conta corrente', "493-7");

cliente01.deposito(200);
cliente01.deposito(300);
cliente01.deposito(2500);
cliente01.saque(400);
cliente01.numeroConta();
cliente01.buscarSaldo();

cliente02.deposito(10);
cliente02.deposito(40);
cliente02.deposito(100);
cliente02.saque(400);
cliente02.numeroConta();
cliente02.buscarSaldo();

```
