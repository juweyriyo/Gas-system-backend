const mongoose = require("mongoose")

const ParchaseSchema = mongoose.Schema({
    ParchaseID:{
        type: String,
        required:true
    },
    tankSize:{
        type: String,
        required:true
    },
    CompanyName:{
        type: String,
        required:true
    },
    QuantityOrdered:{
        type: Number,
        required:true
    },
    Price:{
        type: Number,
        required:true
    }
},
{timestamps : true}
)
module.exports = mongoose.model("Parchase", ParchaseSchema)
