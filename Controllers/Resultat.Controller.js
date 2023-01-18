const ResultatModel =require("../Modeuls/Resultat..Model");
const ClientModel = require("../Modeuls/Client.Model")
const TestModel = require ("../Modeuls/Test.Model")
const MedecinModel = require("../Modeuls/Medecin.Model")
const ResultatController ={
    create : async (req,res)=>{
        try{
        let {Prix,Etat,Client,Medecin,Test}=req.body ;
        let{Analyse}=req.file.filename ;
        let newResultat = new ResultatModel ({
            Prix : Prix , 
            Analyse : Analyse,
            Etat : Etat , 
            Client : Client,
            Medecin : Medecin, 
            Test : Test
        })
        let saveResultat = await newResultat.save(async(err,data)=>{
            await ClientModel.updateOne({Client},{$push: { Resultat: data._id }})
            await TestModel.updateOne({Test},{$push: { Resultat: data._id }})
            await MedecinModel.updateOne({Medecin},{$push: { Resultat: data._id }})
        })
        return res.status(200).json({
            success: true,
            classe: saveResultat
        })
        }catch(err){
            return res.status(400).json({
                success:false,
                error: err
            })
        }
        


    },
    update : async (req,res)=>{

    },
    find : async (req,res)=>{

    },
    findby : async (req,res)=>{

    }
}
module.exports=ResultatController ; 