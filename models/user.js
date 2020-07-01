const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  nome: {type:String,required:true,trim:true},
  email: {type:String,required:true,trim:true},
  idade: Number,
  cpf: {type:String,required:true,trim:true},
  telefone: {type:String,required:true,trim:true},
  contato_emergencia: {type:String,required:false,trim:true},
  cervejas: {type:Number,required:true}
},
  {
    collection: "userCollection"
  }
)


const User = mongoose.model("User", UserSchema);
module.exports = User;