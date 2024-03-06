const mongoose = require("mongoose")

const salesSchema = mongoose.Schema({
    SalesID:{
        type: String,
        required:true
    },
    CustomerName:{
        type: String,
        required:true
    },
    tankSize:{
        type: String,
        required:true
    },
    QuantityOrdered:{
        type: Number,
        required:true
    },
    Total:{
        type: Number,
        required:true
    },
    PricePerUnit:{
        type: Number,
        required:true
    },
    ContactNum:{
        type: String,
        required:true
    }

},
{timestamps: true}
)

module.exports = mongoose.model("Sales", salesSchema)
