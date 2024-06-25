const mongoose=require('mongoose');



const signup=mongoose.Schema({

    email:{type:String,required:true},
    pssword:{type:String,required:true},    
 
});



module.exports=mongoose.model('singupmodel',signup);