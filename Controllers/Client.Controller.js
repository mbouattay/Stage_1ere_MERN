const ClientModel = require("../Modeuls/Client.Model");
const ClientController ={
    create : async (req,res)=>{
        try{
            let{Email,Password,Role,Fname,Lname,Phone}=req.body
            let newClient = new ClientModel ({
                Email:Email ,
                Password:Password ,
                Role: Role , 
                Fname: Fname ,
                Lname :Lname , 
                Phone : Phone
            })
            let saveMClient = await newClient.save();
            return res.status(200).json({
                success: true,
                classe: saveMClient
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
            let{idClient}=req.params;
            let{Email,Password,Role,Fname,Lname,Phone}=req.body
            let updateClient = await ClientModel.findByIdAndUpdate(idClient,{
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
                classe : updateClient
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
        let Clients =await ClientModel.find();
        return res.status(200).json({
            success : true ,
            classe :Clients
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
            let {ClientId}=req.params
            await ClientModel.findByIdAndDelete(ClientId)
            return res.status(200).json({
                success : true , 
                message:" Client deleted successfully ."
            })
        }catch(err){
            return res.status(400).json({
                success : false , 
                error:err
            })
        }
    }
    
}
module.exports = ClientController ;