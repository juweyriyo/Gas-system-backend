const productModel = require("../Model/productModel")

//create Product
const createProduct = async (req,res) =>{
    const newData = productModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

//read method
const getAllProducts = async (req, res) =>{
    const perPage = req.query.page || 0
    const numberOfProduct = 4
    const allProducts = await productModel.find()
    .skip(numberOfProduct * perPage)
    .limit(numberOfProduct)
    if(allProducts){
        res.send(allProducts)
    }
}

//update api
const update = async(req, res)=>{
    const updateData = await productModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send(updateData)
    }
}

// Delete Data start here
const  deleteProduct  = async (req, res) => {
    const deleteData = await productModel.deleteOne(
        {_id: req.params.id}
    )
    if(deleteData){
        res.send(deleteData)
    }
}

//read single data API start
const singleDate = async(req, res)=>{
    try{
    const getData = await productModel.find({_id: req.params.id})
    if(getData){
        res.send(getData)
    }}catch(error){
        console.log(error);
    }
}



module.exports = {
    createProduct,
    getAllProducts,
    singleDate,
    update,
    deleteProduct

}
