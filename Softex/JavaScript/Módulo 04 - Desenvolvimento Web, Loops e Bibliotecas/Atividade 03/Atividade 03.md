# JavaScipt: Módulo 04 - Atividade 03

### Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

```
<script>
function Banco (cliente, conta, saldo, tipoConta, agencia){
  this.cliente = cliente;
  this.conta = conta;
  this.saldo = saldo;

  this.mostarCliente = () => {
    console.log(`\nO cliente ${this.cliente} possui a conta de numero: ${this.conta} e saldo = R$ ${this.saldo} reais\n\n======================================================================================\n`);    
  }
}

var cliente = new Banco('José', 51423, 250.14);
cliente.mostarCliente();

/*============================================================================================================*/
var listaDeAnimais = ['Cachorro', 'Gato', 'Coelho', 'Papagaio', 'Periquito','Macaco-prego', 'Tatu-bola', 'Teiú', 'Cascavel', 'Jacaré-de-papo-amarelo'];

listaDeAnimais.forEach((elemento)=>{
    console.log(elemento);
});
</script>
```