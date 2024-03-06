const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    Id: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    Salary:{
        type: Number,
        required: true,
    },
    Contact: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Addres: {
        type: String,
        required: true,
    }
},
{timestamps : true}
)
module.exports = mongoose.model("employee", employeeSchema)