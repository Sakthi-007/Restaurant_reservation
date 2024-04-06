const express = require('express')
const router = express.Router()
const table = require('../models/filter');

router.get('/filter', async (req, res) => {
    try {
        console.log("Inside Get");
        await table.find()
        .then(result =>   res.json(result))
        .catch(err =>res.json(err));


    } catch (error) {
        res.send(error)
    }
})

router.post('/',async (req,res)=>{


    const tables = new table({

        date:req.body.date,
        time:req.body.time,
        location:req.body.location,
        person:req.body.person
    });

    try {
        console.log("Inside post");
        const Result = await tables.save()
        res.json(Result)

    } 
    catch (error) {
        res.send(error)
        
    }

})



module.exports = router