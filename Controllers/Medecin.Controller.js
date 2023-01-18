const MedecinModel = require ("../Modeuls/Medecin.Model") ; 
const MedecinController ={
    create : async (req,res)=>{
        try{
            let{Email,Password,Role,Fname,Lname,Phone}=req.body
            let Passwordhash = bcrypt.hashSync(Password, 10)
            let newMedecin = new MedecinModel ({
                Email:Email ,
                Password:Passwordhash ,
                Role: Role , 
                Fname: Fname ,
                Lname :Lname , 
                Phone : Phone
            })
            let saveMedecin = await newMedecin.save();
            return res.status(200).json({
                success: true,
                classe: saveMedecin
            })
        }catch(err){
            return res.status(400).json({
                success:false,
                error: err
            })
        }
    },
    update : async (req,res)=>{
        try{
            let{idMedecin}=req.params;
            let{Email,Password,Role,Fname,Lname,Phone}=req.body
            let updateMedecin = await MedecinModel.findByIdAndUpdate(idMedecin,{
                $set:{
                    Email:Email ,
                    Password:Password ,
                    Role: Role , 
                    Fname: Fname ,
                    Lname :Lname , 
                    Phone : Phone
                }
            },{new:true});
            return res.status(200).json({
                success:true ,
                classe : updateMedecin
            })
        }catch(err){
            return res.status(400).json({
                success : false , 
                error : err
            })
        }

    },
    find : async (req,res)=>{
       try{
        let Medecins =await MedecinModel.find();
        return res.status(200).json({
            success : true ,
            classe :Medecins
        }) 
       }catch(err){
        return res.status(400).json({
            success:false , 
            error : err
        })
       }

    },
    delete : async (req,res)=>{
        try{
            let {MedecinId}=req.params
            await MedecinModel.findByIdAndDelete(MedecinId)
            return res.status(200).json({
                success : true , 
                message:" Medecin deleted successfully ."
            })
        }catch(err){
            return res.status(400).json({
                success : false , 
                error:err
            })
        }
    }
}
module.exports = MedecinController ; 