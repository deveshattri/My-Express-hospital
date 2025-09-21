const express=require("express");
const mongoose=require("mongoose");
const app=express();
require('dotenv').config();
const uri = process.env.MONGO_URI;

mongoose.connect(uri);

const User=mongoose.model('users',{
    name:String,
    email:String,
    password:String
});
app.use(express.json());
app.get('/login',async function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    const search= await User.findOne({
        email:email,
    })
    if(search!=null){
        res.status(200).json({
            msg:"Successfully Logged In"
        })
        return;
    }
    res.status(400).json({
        msg:"No User Found"
    });
})

app.post('/signin',async function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const search=await User.findOne({
        email:email,
    })
    if(search){
        res.status(400).json({
            msg:"user Already Existed"
        })
        return;    
    }
    const user=new User({
        name:name,
        email:email,
        password:password
    });
    user.save();
    res.status(200).json({
        msg:"User Signin Seccessfully"
    })
})

app.use((err,req,res,next)=>{
    res.status(400).send("Sorry Something Bad Happens");
})

app.listen(3000);