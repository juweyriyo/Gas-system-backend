const Parchase = require("../Model/Parchase")

//create emlpyee
const createPurchase = async (req,res) =>{
    const newData = Parchase(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

// //read
const displayPurchase = async (req, res) =>{

    try{

        const Purchases = await Parchase.find()
        if(Purchases){
            res.send(Purchases)
        }

    }catch(error){
        console.log(error);
    }
}

// Delete Data start here
const  deleteParchase  = async (req, res) => {
    const deleteData = await Parchase.deleteOne(
        {_id: req.params.id}
    )
    if(deleteData){
        res.send(deleteData)
    }
}


module.exports = {
    createPurchase,
    displayPurchase,
    deleteParchase
}