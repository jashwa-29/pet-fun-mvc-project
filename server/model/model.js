const mongoose = require('mongoose')

const mongoosefields = new mongoose.Schema({
    firstname:{
        type:String , 
        required:true
    } , 
    location:{
        type:String , 
        required:true
    } , 
    phonenumber:{
        type:Number , 
        required:true
    } , 
    emaildata:{
        type:String , 
        require:true
    } , 
    donation:{
        type:String , 
        required:true
    }
})

const mongodbfileinname = mongoose.model("Withdoutdatacontent" , mongoosefields)
module.exports = mongodbfileinname