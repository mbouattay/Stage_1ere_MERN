const mongoose = require ("mongoose")
var ResultatSchema = new mongoose.Schema({
    Prix : {
        type : Number  ,
    },
    Analyse :{
        type : String , 
    },
    Etat:{
        type:String , 
    },
    Client :{
        type:mongoose.Schema.Types.ObjectId,ref:"Client"  
    },
    Medecin :{
        type:mongoose.Schema.Types.ObjectId,ref:"Medecin"
    },
    Test :{
        type:mongoose.Schema.Types.ObjectId, ref:"Test"
    }
});
module.exports = mongoose.model("Resultat",ResultatSchema);