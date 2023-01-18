const mongoose = require ("mongoose")
var TestSchema = new mongoose.Schema({
    Nom :{
        type:String , 
        required :true
    },
    Prix : {
        type :Number , 
        required :true 
    },
    Resultat :[{ type:mongoose.Schema.Types.ObjectId ,ref:"Resultat"}]
});
module.exports =mongoose.model("Test",TestSchema)