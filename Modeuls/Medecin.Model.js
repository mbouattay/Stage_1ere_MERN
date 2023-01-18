const mongoose = require("mongoose") ; 
const UserModel =require("./User.Model")
var MedceinSchema = new mongoose.Schema({
    Fname :{
        type :String , 
        required :true , 
    },
    Lname :{
        type :String , 
        required : true
    },
    Phone : {
        type :String ,
        required :true
    },
    Resultat :[{ type:mongoose.Schema.Types.ObjectId ,ref:"Resultat"}]
});
UserModel.discriminator("Medcein",MedceinSchema) 
module.exports= mongoose.model("Medcein") ;