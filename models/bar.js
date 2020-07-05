const mongoose = require('mongoose');
const BarSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    localizacao: { latitude: Number, longitude: Number },
    foto: { type: String },
    cardapio: [{
        imagem: String,
        nomePrato: String,
        preco: Number,
        promocao: Boolean
    }]
})

const Bar = mongoose.model("Bar", BarSchema);
module.exports = Bar;