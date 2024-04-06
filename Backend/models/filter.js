const mongoose = require('mongoose')

const Restaurants = mongoose.Schema({
   
    date:String,
    time:String,
    location:String,
    person:Number
});

module.exports = mongoose.model('filters', Restaurants)
