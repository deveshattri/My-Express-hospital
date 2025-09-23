const express=require("express");
const cors = require("cors");
const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    let principal=parseInt(req.query.principal);
    let rate=parseInt(req.query.rate);
    let time=parseInt(req.query.time);
    let interest=(principal*rate*time)/100;
    let total=principal+interest;
    res.json({
        total:total,
        interest:interest
    });
})
app.listen(3000);