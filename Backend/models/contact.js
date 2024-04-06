const mongoose = require('mongoose')

const Restaurants = mongoose.Schema({
   
   name:String,
   email:String,
   number:Number,
   date:String,
   time:String,
   location:String,
   person:String,
   tableno:Number
});

module.exports = mongoose.model('Users', Restaurants)