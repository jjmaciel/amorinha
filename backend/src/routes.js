const express = require('express');
const router = express.Router();

const Auth = require('./middlewares/Auth');

// para que as informações possam ser extraidas pela função matchedData() dentro dos controllers
// É necessário que os parâmdetros sejam ao menos declarados dentro do
// AuthValidator, caso contrário a função matchedData fica vazia.
const AuthValidator = require('./validators/AuthValidator');

const AuthController = require('./controllers/AuthController');
const StudentController = require('./controllers/StudentController');
const UserController = require('./controllers/UserController');
const ClassesController = require('./controllers/ClassesController');

router.get('/ping', (req, res) => {
    res.json({pong: true});
});

// rota para fazer login
router.post('/user/login', AuthValidator.login, AuthController.login);
// rota para incrição de usuário
router.post('/user/signup', AuthValidator.signup, AuthController.signup);

// rota para informações do usuário
router.get('/user/info', Auth.private, UserController.info);
// rota para edição do usuário
router.put('/user/edit', UserController.editAction);

router.post('/student/add', StudentController.add);
// rota para listagem de estudantes
router.get('/student/list', StudentController.list);
// rota para pegar um só estudante
router.get('/student/info/:id', StudentController.info);
// rota para pegar as turmas
router.get('/classes/list', ClassesController.getClasses);


module.exports = router;