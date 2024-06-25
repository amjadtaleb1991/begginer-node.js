const mongoose=require('mongoose');



const books=mongoose.Schema({

    name:String,
    type:String,
    author:String,
    review:String 
 
});



module.exports=mongoose.model('modelbooks',books);