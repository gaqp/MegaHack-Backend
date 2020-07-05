const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  nome: {type:String,required:true,trim:true},
  username:{type:String,required:true,trim:true,unique:true},
  password:{type:String,required:true,trim:true,minlength:4},
  email: {type:String,required:true,trim:true},
  idade: Number,
  cpf: {type:String,required:true,trim:true},
  telefone: {type:String,required:true,trim:true},
  contato_emergencia: {type:String,required:false,trim:true},
  pontos: {type:Number,required:true}
},
  {
    collection: "userCollection"
  }
)


const User = mongoose.model("User", UserSchema);
module.exports = User;