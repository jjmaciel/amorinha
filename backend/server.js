// para carregar as variáveis de ambiente
require('dotenv').config();
const express = require('express');
// para conexão com o banco de dados
const mongoose = require('mongoose');
// cors é utilizado para fazer a API
const cors = require('cors');
// para upload de arquivos
const fileupload = require('express-fileupload');
const { mongo } = require('mongoose');

const apiRoutes = require('./src/routes');


// conexão com o banco de dados
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
// se der algum erro na conexão, exibir a mensagem
mongoose.connection.on('error', (error) => {
    console.log("Error: ", error.message);
});

const server = express();

// para receber requisições de qualquer lugar com as configurações padrão
server.use(cors());
server.use(express.json());
// 
server.use(express.urlencoded({extended: true}));
server.use(fileupload());

// para acessar arquivos publicos de qualquer local do sistema
server.use(express.static(__dirname+'/public'));

// central de rotas
server.use('/', apiRoutes);

// escutando em que endereço/porta o servidor está rodando
server.listen(process.env.PORT, () => {
    console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
