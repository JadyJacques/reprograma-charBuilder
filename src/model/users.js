const mongoose = require ("mongoose");

const UsersSchema = new mongoose.Schema ({
        nome: {
                type: String,
                required: true,
                maxlength: 100
            },
            senha: {
                type: String,
                required: true,
                maxlength: 8
            }
        }, {
            timestamps: true
        
        
        
})

const Users = mongoose.model('Users', UsersSchema);
 
module.exports = Users;