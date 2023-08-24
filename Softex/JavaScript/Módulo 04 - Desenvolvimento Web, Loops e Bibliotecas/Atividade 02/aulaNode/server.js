const express = require('express');
 
const app = express();

const rotas = require('./routes/rotas');

const PORT = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
// Envia uma string de resposta para a requisição realizada
res.sendFile(__dirname + '/public/index.html');
});

app.use('/rotas',rotas);

// Inicializa o servidor observando a porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});