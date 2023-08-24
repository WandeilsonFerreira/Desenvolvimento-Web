const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Postagem = new Schema({
    titulo: {
        type: String,
        requeired: true
    },
    
    slug: {
        type: String,
        requeired: true
    },
    descricao: {
        type: String,
        requeired: true
    },
    conteudo: {
        type: String,
        requeired: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: "categorias",
        required: true
    },
    data: {
        type: Date, 
        default: Date.now()
    }
})

mongoose.model("postagens", Postagem)