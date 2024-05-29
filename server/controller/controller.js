const mongodbfilecalling = require('../model/model')
exports.create = (req , res)=>{
 const savingf =  new mongodbfilecalling({
        firstname: req.body.firstname , 
        location: req.body.location , 
        phonenumber: req.body.phonenumber , 
        emaildata: req.body.emaildata , 
        donation: req.body.donation
    })
    savingf.save().then((sd)=>{
      console.log(sd);
      res.redirect('/thankyou')
    })
}