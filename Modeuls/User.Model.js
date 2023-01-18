const mongoose = require ('mongoose') ; 
const baseOptions ={
    discriminatorKey :'itemtype' ,
    collection:"user"
};
var UserSchema = new mongoose.Schema({
    Email : {
        type : String , 
        required : true , 
    },
    Password:{
        type : String , 
        required :true ,
    },
    Role : {
        type : String ,
        require: true , 
    }

},baseOptions);
module.exports = mongoose.model('User',UserSchema) ; 