const express=require('express');
const mongoose=require('mongoose');
const body=require('body-parser');

const rout=require('./router');
const app=express();



app.use(body.json({}));

mongoose.connect('mongodb://127.0.0.1:27017/local').then(()=>{console.log("connected to database")}).catch((err)=>{console.log('err conected')});
app.use('/books',rout.rout);






module.exports={app:app}