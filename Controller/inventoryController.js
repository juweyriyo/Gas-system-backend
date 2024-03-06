const inventoryModel = require("../Model/inventrory")

//create emlpyee
const createInventory = async (req,res) =>{
    const newData = inventoryModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

//update api
const update = async(req, res)=>{
    const updateData = await inventoryModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
}

//read
const displayInventory = async (req, res) =>{

    try{

        const invenrors = await inventoryModel.find()
        if(invenrors){
            res.send(invenrors)
        }

    }catch(error){
        console.log(error);
    }
}



module.exports = {createInventory, displayInventory, update}