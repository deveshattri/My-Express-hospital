const express=require("express");
const cors = require("cors");
const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    let aa=parseInt(req.query.a);
    let bb=parseInt(req.query.b);
    let ans=aa+bb;
    res.json({
        ans:ans
    });
})
app.listen(3000);