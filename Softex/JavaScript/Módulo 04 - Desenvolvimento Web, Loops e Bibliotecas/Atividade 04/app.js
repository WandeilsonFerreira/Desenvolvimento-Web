const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '*****', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function () {
    console.log('Conectado com sucesso ao Banco de Dados!')
  })
  .catch(function (erro) {
    console.log('Falha ao se conectar com o Banco de dados: ' + erro)
  })
