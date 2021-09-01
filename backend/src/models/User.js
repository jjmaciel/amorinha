const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String
});

const modelName = 'User';

// verifica se o model User existe no banco de dados
if (mongoose.connection && mongoose.connection.models[modelName]){
        module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}