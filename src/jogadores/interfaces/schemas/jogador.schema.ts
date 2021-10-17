import * as mongoose from 'mongoose';

export const jogadorSchema = new mongoose.Schema({
    numberPhone:{type: String, unique:true},
    email:{type : String, unique:true},
    nome: {type: String},
    rakin: {type: String},
    posicaoRankin: {type:Number},
    urlFotoJogador: {type:String}
}, {timestamps:true, collection:"jogadores"});

