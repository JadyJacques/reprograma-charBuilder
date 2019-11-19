const mongoose = require ("mongoose");

const PersonagensSchema = new mongoose.Schema ({
    nome: {type: String},
     

})

const Personagens = mongoose.model('Personagens', PersonagensSchema);

module.exports - Personagens;