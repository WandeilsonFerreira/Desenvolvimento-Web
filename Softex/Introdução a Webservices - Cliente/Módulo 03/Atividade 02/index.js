const express = require('express');
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;
// const db = require("./config/db.js")

//formas para ler JSON / middlewares
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//API Routes
const personRoutes = require('./models/routes/personRoutes')
app.use('/', personRoutes)

//configuranção do DB
 const DB_USER = process.env.DB_USER
 const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
 
 mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@minhaapirest.hhvwubn.mongodb.net/?retryWrites=true&w=majority`)
 .then(()=>{
     console.log('Conectado com sucesso!')
     app.listen(PORT, ()=>{
         console.log('Servidor rodando em http://localhost:' + PORT)
     })
      
 })
 .catch((err) => console.log(err))
  


