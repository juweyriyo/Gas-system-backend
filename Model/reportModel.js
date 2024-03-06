
const mongoose = require("mongoose")

const reportSchema = mongoose.Schema({
    file: {
        type: String,
        required: true
    },

},
{timestamps: true}
)

module.exports = mongoose.model("Report", reportSchema)