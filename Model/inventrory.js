const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    InventoryID:{
        type: String,
        required:true
    },
    TankiSize:{
        type: String,
        required:true
    },
    QuantityAvailable:{
        type: Number,
        required:true
    },
    PricePerUnit:{
        type: Number,
        required:true

    }
},
{timestamps: true}
)

module.exports = mongoose.model("Inventory", inventorySchema)