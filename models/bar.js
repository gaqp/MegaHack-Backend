const mongoose = require('mongoose');
const BarSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    localizacao: { latitude: Number, longitude: Number },
    foto: { type: String },
    cardapio: {
        comida: [
            {
                nome: { type: String },
                descricao: { type: String },
                preco: { type: Number },
                promocao: { type: Boolean }
            }
        ],
        bebida: [
            {
                nome: { type: String },
                descricao: { type: String },
                preco: { type: Number },
                promocao: { type: Boolean }
            }
        ],
        pontos: [
            {
                nome: { type: String },
                descricao: { type: String },
                preco: { type: Number },
                promocao: { type: Boolean }
            }
        ],
        eventos:[{
            nome: { type: String },
            data: { type: String },
            hora: { type: String },

        }]
    }
})

const Bar = mongoose.model("Bar", BarSchema);
module.exports = Bar;