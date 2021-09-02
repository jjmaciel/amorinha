const Student = require('../models/Student');
// validationResult = função que valida os dados
// matchedData = Resultado dos dados valiados
const { validationResult, matchedData } = require('express-validator');
// uuid para gerar código aleatório (vou usar no nome das imagens)
const { v4: uuidv4 } = require('uuid');
// utilizado para manipulação de imagens
const jimp = require('jimp');

// pega um buffer de uma imagem, ou seja os dados em bytes
const addImage = async (buffer) => {
    // criando um nome aleatório para a imagem
    let image_name = `${uuidv4()}.jpg`;
    // lendo a imagem
    let image_tmp = await jimp.read(buffer);
    // convertendo a imagem para 300px,500px, diminuindo a qualidade de 100% para 80% e salvando no HD
    image_tmp.cover(300,500).quality(80).write(`./public/media/${image_name}`);
    return image_name;
}

module.exports = {
    add: async (req, res) => {
        let { name, birthDate, responsableName, phone, emergencyWarning, phoneEmergency, foodRestriction, descriptionFoodRestriction, imageAuthorization, authorizedPeople, schoolClass, additionalNotes, id=0 } = req.body;
        
        const newStudent = new Student();
        newStudent.name = "Didi Costa";
        newStudent.birthDate = birthDate;
        newStudent.responsableName= responsableName;
        newStudent.phone= phone; 
        newStudent.emergencyWarning= emergencyWarning;
        newStudent.phoneEmergency= phoneEmergency;
        newStudent.foodRestriction= foodRestriction;
        newStudent.descriptionFoodRestriction= descriptionFoodRestriction;
        newStudent.imageAuthorization= (imageAuthorization == 'true' ? true : false);
        newStudent.authorizedPeople= authorizedPeople;
        newStudent.schoolClass= schoolClass;
        newStudent.additionalNotes= additionalNotes;
          
    
        if(req.files){
            if(['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.name.mimetype)){
                let url = await addImage(req.files.name.data);
                newStudent.photo = url;
            }
        }

        const student = await newStudent.updateOne({_id: "613111cab77dcb6319f53fd3"});
        
        res.json({id: student._id});
   /*    
       // #######################################################################################################33
        // depois dos dados passar pela validação Auth.private
        const errors = validationResult(req);
        // verifica-se se tem alguma mensagem de erro
        if (!errors.isEmpty()){
            res.json({error: errors.mapped()});
        }

        // se não tem erros, o matcheData passa as informações para a const data
        const data = matchedData(req);

        // verifica se na requisição foi enviado arquivos e se esses arquivos são do tipo imagem
        if (req.files && req.files.img){
            // verifica se o tipo de imagem é com as extensões jpeg, jpg, png. Se sim, então chama a função addImage que retorna o nome da imagem criada e
            // armazenada no diretório ./public/media/
            if (['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.img.mimetype)){
                let image_url = await addImage(req.files.img.data);
            }
        }
*/
        /**
         * COLOCAR AQUI UM TESTE PARA VERIFICAR SE O CADASTRO JÁ EXISTE
         * 
         */
 /*       const newStudent = new Student({
            name: data.name,
            birthdata: data.birthdata,
            responsableName: data.responsableName,
            phone: data.phone, 
            emergencyWarning: data.emergencyWarning,
            phoneEmergency: data.phoneEmergency,
            foodRestriction: data.foodRestriction,
            descriptionFoodRestriction: data.descriptionFoodRestriction,
            imageAuthorization: data.imageAuthorization,
            authorizedPeople: data.authorizedPeople,
            schoolClass: data.schoolClass,
            additionalNotes: data.additionalNotes
            
        });
        
        // salvando na base de dados
        await newStudent.save();
*/
        /* se eu quiser um retorno do id desse processo, devo fazer assim:
        const student_id = await newStudent.save();
        res.json({id: student_id._id});*/

        // res.json({feito: "feito"});

    },

    list: async (req, res) => {
        // pegando todos os parâmetros que podem ser enviados via query
        // sort: colocar em forma ascendente se não vier nada
        // offset: paginação conforme a quantidade itens retornado
        // limit: limita em 8 itens por página
        // query_search: é o que foi digitado na busca
        // class_school: se o filtro for por turma.
        let { sort = 'asc', offset = 0, limit, query_search } = req.query;
        let filters = {};
        // verificando se o usuário procurou por um determinado nome. Se sim $regex faz um filtro
        // na busca por esse nome, sem o $regex o suário deve digitar o nome exatamente como está
        // no cadastro. E $options i é para tirar o case sensitive.
        if (query_search){
            filters.name = {'$regex': query_search, '$options': 'i'};
        }

        // pegando o total de registro retornado do banco de dados para ser possível criar
        // a páginação. Informação essa que é enviada para o frontend
        let total = 0;
        let student_total = await Student.find(filters).exec();
        total = student_total.length;

        let student = await Student.find(filters)
            .sort(sort)
            .skip(parseInt(offset))
            .limit(parseInt(limit))
            .exec();


        let student_array = [];
        for (let i in student){
            student_array.push({
                id: student[i]._id,
                name: student[i].name,
                birthstudent: student[i].birthstudent,
                responsableName: student[i].responsableName,
                phone: student[i].phone, 
                emergencyWarning: student[i].emergencyWarning,
                phoneEmergency: student[i].phoneEmergency,
                foodRestriction: student[i].foodRestriction,
                descriptionFoodRestriction: student[i].descriptionFoodRestriction,
                imageAuthorization: student[i].imageAuthorization,
                authorizedPeople: student[i].authorizedPeople,
                schoolClass: student[i].schoolClass,
                additionalNotes: student[i].additionalNotes,
                photo: student[i].photo

            });
        }

        res.json({student_array, total});
    },

    info: async (req, res) => {
        student_id = (req.params.id).replace(":", "");
        let student = await Student.findOne({_id: student_id });

        res.json({student});
    },

    editAction: async (req, res) => {

    },

};