const fs = require('fs')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    let data = JSON.parse(await fs.readFileSync(__dirname+'/db.json','utf-8'))
    const index = Math.floor(Math.random() * data.words.length);
    res.send({word:data.words[index]})
})

app.listen(8000,()=>{
          console.log('http://localhost:8000')
})