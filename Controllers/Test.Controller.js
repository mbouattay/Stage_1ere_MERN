const TestModel =require("../Modeuls/Test.Model")
const TestController={
    create : async (req,res)=>{
        try{
            let{Nom,Prix}=req.body
            let newTest = new TestModel ({
               Nom:Nom,
               Prix:Prix
            })
            let saveTest = await newTest.save();
            return res.status(200).json({
                success: true,
                classe: saveTest
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
            let{idTest}=req.params;
            let{Nom,Prix}=req.body
            let updateTest = await TestModel.findByIdAndUpdate(idTest,{
                $set:{
                    Nom:Nom,
                    Prix:Prix
                }
            },{new:true});
            return res.status(200).json({
                success:true ,
                classe : updateTest
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
        let Testes =await TestModel.find();
        return res.status(200).json({
            success : true ,
            classe :Testes
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
            let {TestId}=req.params
            await TestModel.findByIdAndDelete(TestId)
            return res.status(200).json({
                success : true , 
                message:" Test deleted successfully ."
            })
        }catch(err){
            return res.status(400).json({
                success : false , 
                error:err
            })
        }
    }
}
module.exports=TestController ;