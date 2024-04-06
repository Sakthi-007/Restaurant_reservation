const express = require('express')
const router = express.Router()
const contact = require('../models/contact');

router.get('/admin',async (req,res)=>{

    try {
        console.log("Inside GET");
        const cont=await contact.find()
        res.json(cont)

    } catch (error) {
        res.send(error)
        
    }
})

router.post('/', async (req,res)=>{


    const Contacts = new contact({
        
      
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        date:req.body.date,
        time :req.body.time,
        location :req.body.location, 
        person :req.body.person,
        tableno:req.body.tableno
       
             });

    try {
        console.log("Inside post");
        const sendData = await Contacts.save()
        console.log(sendData);
        res.json(sendData)

    } 
    catch (error) {
        res.send(error)
        
    }

})

module.exports = router