const mongoose = require ("mongoose");

const PersonagensSchema = new mongoose.Schema ({
        nickname: {
                type: String, 
                required: true,
                maxlength: 10
            },
            faccao: {
                type: String, 
                required: true
            },
            raca: {
                type: String, 
                required: true
            },
            genero: {
                type: String, 
                required: true
            },
            classe: {
                type: String, 
                required: true,
            },
            level: {
                type: String, 
                required: true,
                maxlength: 2
            }
        
})

const Personagens = mongoose.model('Personagens', PersonagensSchema);
 
module.exports = Personagens;