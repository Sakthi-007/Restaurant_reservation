const mongoose = require('mongoose')

const Restaurants = mongoose.Schema({
    Table_id: Number,
    seat: Number,
    Availablity: Boolean,
    reserve_id: Number 

});

module.exports = mongoose.model('pollachis', Restaurants);
