const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// validationResult = função que valida os dados
// matchedData = Resultado dos dados valiados
const { validationResult, matchedData } = require('express-validator');

const User = require('../models/User');

module.exports = {
    login: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.json({error: errors.mapped()});
            return;
        }
        const data = matchedData(req);

        // buscando o email no banco de dados 
        const user = await User.findOne({ email: data.email });
        if (!user){
            res.json({ error: 'Email e/ou senha inválidos' });
            return;      
        }

        // verificando se a senha é válida
        const match = await bcrypt.compare(data.password, user.password);
        if (!match) {
            res.json({ error: 'Email e/ou senha inválido' });
            return;
        }

        // criando um token aleatório com uso da data + um numero aleatório e criptografando este token e substituido o token existente
        const payload = (Date.now()+ Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);
        
        user.token = token;
        await user.save();

        // retorna um json com os dados que o usuário digitou + o name que vem do banco de dados
        res.json({ token, email: data.email, name: user.name });
    },

    signup: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            res.json({ error: errors.mapped() });
        }

        // recebendo os dados se passar pela verificação
        const data = matchedData(req);
            
        // verifica se o e-mail já existe no sistema
        const user = await User.findOne({
            email: data.email
        });
        // se já existe, passa uma mensagem de erro
        if (user){
            res.json({
                error: { email:{ menssage: 'Email já existe' } }
            });
            return;
        };
        
        // criptografando a senha
        const passwordHash = await bcrypt.hash(data.password, 10);

        // criando um token aleatório com uso da data + um numero aleatório e criptografando este token
        const payload = (Date.now()+ Math.random()).toString();
        const token = await bcrypt.hash(payload, 10);

        // criando um objeto do tipo User
        const newUser = new User({
            name: data.name,
            email: data.email,
            password: passwordHash,
            token: token,
        });
        // salvando este objeto na base de dados
        // await newUser.save();

        // retornando o token para que o usuário já se logue
        res.json({ token });
    },

};



/**
// verifica se o ID do e-mail é um id válido
if (mongoose.Types.ObjectId.isValid(data.email)){

    colocaro o código necessaŕio aqui

} else {
    res.json({
        error: { user: { menssage: 'ID do usuário inválido' } }
    });
    return;
}
 */