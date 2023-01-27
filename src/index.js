const fs = require('fs')
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const ScoreModel = require('../models/user.model')
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery',false)

app.get("/",async(req,res)=>{
    let data = JSON.parse(await fs.readFileSync(__dirname+'/db.json','utf-8'))
    const index = Math.floor(Math.random() * data.words.length);
    res.send({word:data.words[index]})
})

app.post("/score",async(req,res)=>{
    try{
        const {name , score} = req.body
       
            const data = new ScoreModel({name , score});
            await data.save()
            return res.status(201).send("Score Added added succesfully")
       
        }
        catch(err){
            res.status(404).send(err.message)
        }
})
app.get("/score",async(req,res)=>{
    try{
       
            const data = await ScoreModel.find({})
            return res.status(201).send(data)
       
        }
        catch(err){
            res.status(404).send(err.message)
        }
})

mongoose.connect("mongodb+srv://An:o32Rt3XTzkw4cHPb@cluster0.hjklaur.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(8000 , ()=>{
        console.log("running on http://localhost:8000")
    })
})