const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const dotenv=require('dotenv');
dotenv.config();
app.get('/',(req,res)=>{
    res.send("Hello this Home Page")
})
app.get('/contact',(req,res)=>{
    res.send("Hello this Contact Page")
})
app.get('/about',(req,res)=>{
    res.send({msg:"Hello this About Page",apikey:process.env.MY_API_KEY})
})
app.listen(port,()=>console.log(`listening on port ${port}`));