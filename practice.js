const express = require('express');
const fs = require('fs');
const app = express();
const folderPath = './files';  
let arr=[];
app.get('/',(req,res)=>{
    fs.readdir(folderPath, (err, files) => {
      if (err) res.status(404).send("Sorry");
      arr=files;
      let totalfile=files.length;
      let filesname=files;
      res.status(200).json({
        totalfile,
        filesname
      })
    });  
})

app.get('/:filename',(req,res)=>{
    const filename = req.params.filename;
    let flag=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==filename) flag=true;
    }
    if(flag){
        fs.readFile(`./files/${filename}`,'utf-8',(err,data)=>{
            if(err) res.status(500).send("Not able to Process");
            res.send(data);
        })
    }
    else{
        res.status(404).send("No file found by this name");
    }
});

app.listen(5000);