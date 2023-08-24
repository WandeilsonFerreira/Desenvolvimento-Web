# JavaScipt: Módulo 04 - Atividade 04

### Implemente e trate uma conexão com o seu banco de dados, usando JavaScript. Caso a conexão com o banco tenha sucesso, ele deve retornar uma frase positiva. Se isso não ocorrer, retorne uma frase informando o erro.

```

const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste','root','******', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso ao Banco de Dados!");
}).catch(function(erro){
    console.log("Falha ao se conectar com o Banco de dados: " + erro);
})

```