const mongoose = require ("mongoose");

const UsersSchema = new mongoose.Schema ({
        nome: {type: String},
        senha: {type: String}
        
})

const Users = mongoose.model('Users', UsersSchema);
 
module.exports = Users;