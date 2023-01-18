const mongoose = require("mongoose")
const UserModel =require("./User.Model")
var ClientSchema = new mongoose.Schema({
    Fname : {
        type :String , 
        required : true
    } ,
    Lname : {
        type :String , 
        required : true
    },
    Phone :{
        type : String , 
        required :true 
    },
    Resultat :[{ type:mongoose.Schema.Types.ObjectId ,ref:"Resultat"}]

}); 
UserModel.discriminator("Client",ClientSchema)
module.exports = mongoose.model("Client");