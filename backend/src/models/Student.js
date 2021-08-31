const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    responsableName: String,
    phone: String, 
    emergencyWarning: [Object],
    phoneEmergency: String,
    foodRestriction: String,
    descriptionFoodRestriction: String,
    imageAuthorization: Boolean,
    authorizedPeople: String,
    schoolClass: String,
    additionalNotes: String
});

const modelStudent = 'student';

// verifica se o model student existe no banco de dados
if (mongoose.connection && mongoose.connection.models[modelStudent]){
        module.exports = mongoose.connection.models[modelStudent];
} else {
    module.exports = mongoose.model(modelStudent, modelSchema);
}