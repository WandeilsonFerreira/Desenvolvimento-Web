const express = require('express');
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);//Corrigindo o aviso do mongoose
require('dotenv').config()
 
const app = express();
const PORT = process.env.PORT || 5000;


//Configuração iniciais do express
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//Configuração das rotas
const bookRoutes = require('./routes/bookRoutes')
app.use('/', bookRoutes)


//Configurações do DB
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@livraria.syi5jb7.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Conectado com sucesso!')
    app.listen(PORT, ()=>{
        console.log('Servidor rodando em http://localhost:' + PORT)
    })
})
.catch((err) => console.log(err))


 