import express from "express";
const app=express();
const port=3000;
app.get("/about", (req,res)=>{res.send("<h1>this is me<\h1>") })
app.get("/", (req,res)=>{res.send("heloo") })
app.get("/contact", (req,res)=>{res.send("<h4>why<\h4>") })

app.listen(port, ()=> {console.log("success")});