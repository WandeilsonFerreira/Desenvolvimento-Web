const { consultarCep, calcularPrecoPrazo, rastrearEncomendas } = require('correios-brasil');
 
// Consultar CEP
const cep = '58063520';  

consultarCep(cep).then(response => {
  console.log(response);
});

 //Consultar preço e prazo
let args = {
    sCepOrigem: '81200100',
    sCepDestino: '21770200',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'],  
    nVlDiametro: '0',
  };
  
  calcularPrecoPrazo(args).then(response => {
    console.log(response);
  });

 //Rastrear encomenda 
let codRastreio = ['OU341933668BR']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then(response => {
  console.log(response);
})