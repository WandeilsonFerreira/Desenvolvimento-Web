npm i express --save
npm i express-handlebars --save
npm i body-parse --save
npm i mongoose --save

app.js

//Carregando módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
//const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

//Configurações
//configuração do body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configuração do handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'})
app.set('view engine', 'handlebars');
//Mongoose

//Rotas
//Rotas
app.use('/admin', admin);

//Outros

app.listen(PORT, ()=>{
  console.log('Servidor rodando em http://localhost:' + PORT)
 })
 
Diretório principla:
mkdir models
mkdir rotas
mkdir views => layouts => main.handlebars => ! => <body>{{{body}}}</body>

Node.js - Grupo de rotas no Express.js #32
routes => Admin.js

const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Página principal do painel ADM');
})

router.get('/posts', (req,res)=>{
    res.send('Página de posts');
})

router.get('/categorias', (req,res)=>{
    res.send('Página de categorias');
})

module.exports = router;


======================================

Upload no heroku
1º cria o arquivo package.json
    npm init

    enter até finalizar
2º cadastrar o scrip-start para o heroku iniciar a aplicação:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"==>>,
    "start": "node app.js"<<==
  },

3º Alterar a variavel de abiente para a conexao da porta do app
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('Servidor rodando em http://localhost:' + PORT)
 })

4º Configurar o MLAB, ele da 500mb de espaço com o mongo
    Cria uma conta, confirma o email, create new -> SAND BOX free -> regiao> usa -> name: blogapp-prod -> submit order.

    Cria um novo user ->nome e senha segura  

    Cria o arquivo db.js na pasta config e faz a configuração para a aplicação alterar entre o banco local e o que no MLAB

    Arquivo db.js:

    if (process.env.NODE_ENV == "production"){
        module.exports = {mongoURI: LINK do MLAB alterando o user e a senha, lembrar de criar o arquivo no .gitignore}
    }else{
        module.exports = {mongoURI: "mongodb://localhost/blogApp" }
    }

    em app.js chama o arquivo db.js
    const db = require("./config/db")

    nas configurações do mongoouse passa a variavel 
    mongoose.connect(db.mongoURI).then(()=>{

5º configuração do git:
    instala na maquina
    cria o arquivo .gitignore na raiz do projeto
    git init
    git add .
    git commit -am "initial commit"

    pesquisa sobre a ferramnte heroko cli e baixa a ferramenta e instala sem problemas
    cria sua conta na heroku
    navega ate a pasta do projeto pelo cmd
    heroku login ==Vai entrar na pagina para fazer o login
    - email e senha
    heroku create
    vai no site do heroku e clica no projeto
    clica em deploy - abre todas as informaçãos do projeto

    == Faz a conexão direta com o Github
    
    copia o link do git: heroko git:remote -a ...
    add no cmd da heroku
    copia a linha do git push heroku master
    cola no terminal da heroku para a publicação 

    heroko open abre a aplicação no navegador
    testa a aplicação 
    ja visualiza o mlab se ta certo as paradas
    Fim do curso


