const salesModel = require("../Model/salesModel")

//create sales
const createSales = async (req,res) =>{
    const newData = salesModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

module.exports = {createSales}