const { log } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const path = require('path')

const mongodburl = 'mongodb+srv://jashwa-29:fXxQeI3RwO487uU5@cluster0.0tbvc4t.mongodb.net/withoutdatapro'
mongoose.connect(mongodburl , {}).then(()=>{
    console.log("database connected");
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine" , "ejs")

app.use('/', require('./server/routes/routes')) 
app.use(express.static('public'))


// app.get('/', (req , res)=>{
//     res.send('index')
// })

app.listen(2700 , ()=>{
    console.log("port connected");
})   