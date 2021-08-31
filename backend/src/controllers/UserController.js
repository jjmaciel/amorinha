const User = require('../models/User');

module.exports = {
    info: async (req, res) => {
        let token = req.body.token;
        let user = await User.findOne({token});
        
        res.json({
            name: user.name,
            email: user.email
        });
        
    },

    editAction: async (req, res) => {
        res.json({editAction: true});
    },

};
