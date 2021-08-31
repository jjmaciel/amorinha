const { checkSchema } = require('express-validator');

module.exports = {
    signup: checkSchema({
        name: {
            // notEmpty: true,
            // trim é usado para retirar espaços no final e no inicio da string
            trim: true,
            // reerente ao tamanho da string, neste caso deve ter no minimo 2 caracteres, por isso que comentei o notEmpty
            isLength:{ options: { min: 2} },
            // se alguma coisa estiver fora dessa regra, uma mensagem de erro padronizada é mostrado
            errorMessage: "Nome precisa ter pelo menos 2 caracteres"
        },
        email:{
            // verifica se é um email "valido"
            isEmail: true,
            // formata o email, minuscula, tira o espaço no inicio e final
            normalizeEmail: true,
            errorMessage: 'Email inválido'
        },
        password: {
            isLength: { options: { min: 2 } },
            errorMessage: "Senha deve ter no mínimo 2 caracteres"
        }
    }),

    login: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'Email inválido'
        },
        password: {
            isLength: { options: { min: 2 } },
            errorMessage: "Senha precisa ter no mínimo 2 caracteres"
        },
    }),

    add: checkSchema({
        name: {
            notEmpty: true,
            errorMessage: "O Nome não pode estar vazio"
        },
        birthdata: {
            
        },
        responsableName: {
            
        },
        phone: {
            
        }, 
        emergencyWarning: {
            
        },
        phoneEmergency: {
            
        },
        foodRestriction: {
            
        },
        descriptionFoodRestriction: {
            
        },
        imageAuthorization: {
            
        },
        authorizedPeople: {
            
        },
        schoolClass: {
            
        },
        additionalNotes: {
           
        }

    })
};