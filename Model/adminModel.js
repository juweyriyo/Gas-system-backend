const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    Id:{
        type: Number,
        required: true,
    },
    Username: {
        type: String,
        required: true,
    },

    Password: {
        type: String,
        required: true,
    },
    Role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isApproved: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Admin", adminSchema)