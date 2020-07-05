const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  nome: {type:String,trim:true},
  username:{type:String,required:true,trim:true,unique:true},
  password:{type:String,required:true,trim:true,minlength:4},
  email: {type:String,trim:true},
  idade: Number,
  cpf: {type:String,trim:true},
  telefone: {type:String,trim:true},
  contato_emergencia: {type:String,trim:true},
  pontos: {type:Number,required:true}
},
  {
    collection: "userCollection"
  }
)


const User = mongoose.model("User", UserSchema);
module.exports = User;