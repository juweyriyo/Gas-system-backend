const employeeModel = require("../Model/employeeModel")

//create emlpyee
const createEmployee = async (req,res) =>{
    const newData = employeeModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

//read method
const getAllEmployees = async (req, res) =>{
    const perPage = req.query.page || 0
    const numberOfEmployee = 4
    const allEmployees = await employeeModel.find()
    .skip(numberOfEmployee * perPage)
    .limit(numberOfEmployee)
    if(allEmployees){
        res.send(allEmployees)
    }
}

//Searching employee API starts
const searchEmp = async (req,res) =>{
    const searchData = await employeeModel.find({
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
    const getData = await employeeModel.find({_id: req.params.id})
    if(getData){
        res.send(getData)
    }}catch(error){
        console.log(error);
    }
}

//update api
const update = async(req, res)=>{
    const updateData = await employeeModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
}

module.exports = {
    createEmployee,
    getAllEmployees,
    searchEmp,
    singleDate,
    update
}