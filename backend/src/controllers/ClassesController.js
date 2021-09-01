const Classes = require('../models/Classes');

module.exports = {
    getClasses: async (req, res) => {
        let classes = await Classes.find().exec();

        res.json({classes});
    },

};
