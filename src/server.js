var mysql=require('mysql');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());

//const { default: App } = require('./App');

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"ih_react_003"
})
app.post("/create",(req,res)=>{
    const empId=req.body.empId;
    const empName=req.body.empName;
    const empSal=req.body.empSal;

    db.query("insert into employees (empId,empName,empSal) values(?,?,?)",
    [empId,empName,empSal],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Record Inserted");
        }
    });
});
app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});

