const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    CustomerID: {
        type: Number,
        required: true,
    },
    CustomerName: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
},
{timestamps : true}
)
module.exports = mongoose.model("customer", customerSchema)