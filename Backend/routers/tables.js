const express = require('express')
const router = express.Router()
const table = require('../models/tables');
const mongoose = require('mongoose')

router.get('/restaurant', async (req, res) => {
    try {
        console.log("Inside Get");
        const { quantity } = req.query;
        const result = await table.find({ Availablity: true, seat: quantity });

        console.log("result", result);
        res.json(result)  

    } catch (error) {
        res.send(error)
    }
})

router.post('/',async (req,res)=>{


    const tables = new table({
        Table_id: req.body.Table_id,    
        seat: req.body.seat,
        Availablity: req.body.Availablity,
        reserve_id: req.body.reserve_id 
            
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

router.post('/book', async (req, res) => {
    try {
        const { Table_id } = req.body;

        // Find the table by Table_id and update Availablity to false
        const result = await table.findOneAndUpdate({ Table_id }, { Availablity: false }, { new: true });

        res.json(result);
    } catch (error) {
        res.send(error);
    }
});


module.exports = router