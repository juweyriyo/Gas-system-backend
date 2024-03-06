const customerModel = require("../Model/customerModel")

//create customer
const createCustomer = async (req,res) =>{
    const newData = customerModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

//read method
const getAllCustomer = async (req, res) =>{
    const perPage = req.query.page || 0
    const numberOfCustomer = 4
    const allCustomer = await customerModel.find()
    .skip(numberOfCustomer * perPage)
    .limit(numberOfCustomer)
    if(allCustomer){
        res.send(allCustomer)
    }
}

//read single data API start
const singleDate = async(req, res)=>{
    try{
    const getData = await customerModel.find({_id: req.params.id})
    if(getData){
        res.send(getData)
    }}catch(error){
        console.log(error);
    }
}

//update api
const update = async(req, res)=>{
    const updateData = await customerModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
}

// Delete Data start here
const  deleteCustomer = async (req, res) => {
    const deleteData = await customerModel.deleteOne(
        {_id: req.params.id}
    )
    if(deleteData){
        res.send(deleteData)
    }
}


module.exports = {
    createCustomer,
    getAllCustomer,
    singleDate,
    update,
    deleteCustomer
}
