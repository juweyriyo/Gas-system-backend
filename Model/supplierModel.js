const mongoose = require("mongoose")

const supplierSchema = mongoose.Schema({
    SupplierID:{
        type:Number,
        required: true
    },
    SupplierName:{
        type:String,
        required: true
    },
    ContactNumber:{
        type:Number,
        required: true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("supplier", supplierSchema)