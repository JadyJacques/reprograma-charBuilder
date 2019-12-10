const mongoose = require ("mongoose");

const PersonagensSchema = new mongoose.Schema ({
        nickname: {type: String},
        faccao: {type: String},
        raca: {type: String},
        genero: {type: String},
        classe: {type: String},
        level: {type: Number}
        
})

const Personagens = mongoose.model('Personagens', PersonagensSchema);
 
module.exports = Personagens;