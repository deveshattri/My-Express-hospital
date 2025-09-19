const express = require('express')
const app = express()

const users=[
  {
    name:"devesh",
    kidneys:[
      {isHealthy:true}
    ]
  }
]

app.use(express.json());

app.get("/",(req,res)=>{
  let kidneys=users[0].kidneys;
  let totalkidneys=kidneys.length;
  let healthykidneys=0;
  for(let i=0;i<totalkidneys;i++){
    if(kidneys[i].isHealthy) healthykidneys=healthykidneys+1;
  }
  let unhealthykidneys=totalkidneys-healthykidneys;
  res.json({
    totalkidneys,
    healthykidneys,
    unhealthykidneys
  })
});

app.post('/',(req,res)=>{
  let body=req.body;
  let kidneys=users[0].kidneys;
  kidneys.push({
    isHealthy:body.isHealthy
  })
  res.json({
    msg:"done"
  })
})

app.listen(8000);