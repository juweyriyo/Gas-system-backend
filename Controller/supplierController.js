const supplierModel = require("../Model/supplierModel")

//create emlpyee
const createSupplier = async (req,res) =>{
    const newData = supplierModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

//read method
const getAllSuppliers = async (req, res) =>{
    const perPage = req.query.page || 0
    const numberOfSupplier = 4
    const allSuppliers = await supplierModel.find()
    .skip(numberOfSupplier * perPage)
    .limit(numberOfSupplier)
    if(allSuppliers){
        res.send(allSuppliers)
    }
}

//Searching supplier API starts
const searchSupplier = async (req,res) =>{
    const searchData = await supplierModel.find({
        $or:[
        {Name: {$regex: req.params.key} },
        ]
    })
    if(searchData){
        res.send(searchData)
    }
}

//read single data API start
const singleDate = async(req, res)=>{
    try{
    const getData = await supplierModel.find({_id: req.params.id})
    if(getData){
        res.send(getData)
    }}catch(error){
        console.log(error);
    }
}

//update api
const update = async(req, res)=>{
    const updateData = await supplierModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
}

// Delete Data start here
const  deleteSupplier  = async (req, res) => {
    const deleteData = await supplierModel.deleteOne(
        {_id: req.params.id}
    )
    if(deleteData){
        res.send(deleteData)
    }
}

module.exports = {
    createSupplier,
    getAllSuppliers,
    searchSupplier,
    singleDate,
    update,
    deleteSupplier
}