const mongoose = require('mongoose');

const GasProductSchema = new mongoose.Schema({
    ProductID:{
        type:String,
        required: true
    },
    tankSize:{
        type: String,
        required : true
    },
    PrisePerUnit:{
        type: Number,
        required: true
    }
        
    // Qodobada kale ee schema-ga
  });
  
  module.exports = mongoose.model('GasProduct', GasProductSchema);
  

