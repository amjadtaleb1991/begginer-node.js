const express=require('express');
const mongoose=require('mongoose');
const modelbooks=require('./modelbooks');
const singupmodel=require('./singupmodel');

const rout=express();





rout.post('/',(req,res,next)=>{
const books=new modelbooks({
 name:req.body.name,
 type:req.body.type,
 author:req.body.author,
})

books.save().then(doc=>{console.log(doc)}).catch((err)=>{console.log(err)});

res.status(200).json({

books:books

})

});
rout.post('/',(req,res,next)=>{
    const books=new modelbooks({
     name:req.body.name,
     type:req.body.type,
     author:req.body.author,
     review:req.body.review
    })
    
    books.save().then(doc=>{console.log(doc)}).catch((err)=>{console.log(err)});
    
    res.status(200).json({
    
    books:books
    
    })
    
    });
    rout.get('/',(req,res,next)=>{
      
        modelbooks.find().select('name type author review').exec().then(doc=>{console.log(doc),
            res.status(200).json({
               doc
      
              })
               

        }).catch((err)=>{console.log(err)});
        
        
        });


       




        rout.get('/:id',(req,res,next)=>{
            const id =req.params.id;  

      
            modelbooks.findById(id).select('name type author').exec().then(result=>{console.log(result),
                res.status(200).json({
                   result
                  });
            }).catch((err)=>{console.log(err)});
            
            
            });

            rout.get('/getbyauthor/:author',(req,res,next)=>{
                const author =req.params.author;
          
                modelbooks.findOne({ author: author }).exec().then(final=>{console.log(final),
                    res.status(200).json({
                       final
                      });
                }).catch((err)=>{console.log(err)});
                

                
                });




                
                

                    rout.get('/review/:name',(req,res,next)=>{
                        const name =req.params.name;
                  
                        modelbooks.findOne({ name:name }).select("type").exec().then(final=>{console.log(final),
                            res.status(200).json({
                              review: final
                              });
                        }).catch((err)=>{console.log(err)});
                        
                        
                        });
















                rout.post('/singup',(req,res,next)=>{
                    const user=new singupmodel({
                    email :req.body.email,
                    pssword:req.body.pssword,
                    })
                    
                    user.save().then(result=>{console.log(result),
                       res.status(201).json({
                        user:result,
                       })


                    }).catch((err)=>{
                        console.log(err)
                });
                    
                    res.status(200).json({
                    
                    user: "creat user access",
                    
                    })
                    
                    });
               






module.exports={rout:rout};