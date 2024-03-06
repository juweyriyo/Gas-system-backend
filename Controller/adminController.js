const adminModel = require("../Model/adminModel")

const regesterAdmin = (req,res) =>{
    const newAdmin = adminModel(req.body)
    const saveAdmin = newAdmin.save()
    if(saveAdmin){
        res.send(saveAdmin)
    }
}

const loginAdmin = async (req,res) =>{
    try{
        if(req.body.Username && req.body.Password  /*&& req.body.Role*/){
        const adminData = await adminModel.findOne(req.body).select("-Password")
        if(adminData){
            res.send(adminData)
        }
        else{
            res.send({
                error: "User not Found"
            })
        }
    }
        else{
            res.send({
                error: "Incorrect password or username and Role"
            })
        }

    }catch(error){
        console.log(error);
    }
    

}

//read method
const getAllUsers = async (req, res) =>{
    const perPage = req.query.page || 0
    const numberOfSupplier = 4
    const allUsers = await adminModel.find()
    .skip(numberOfSupplier * perPage)
    .limit(numberOfSupplier)
    if(allUsers){
        res.send(allUsers)
    }
}

// Delete Data start here
const  deleteUser  = async (req, res) => {
    const deleteData = await adminModel.deleteOne(
        {_id: req.params.id}
    )
    if(deleteData){
        res.send(deleteData)
    }
}

module.exports ={
    regesterAdmin,
    loginAdmin,
    getAllUsers,
    deleteUser
}