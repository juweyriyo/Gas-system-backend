const multer= require("multer")
const reportModel = require("../Model/reportModel")
const storageLocation= multer.diskStorage({
     destination: (req, file , cb)=>{
          cb(null, "reports")
     },
     filename: (req,file,cb)=>{
          cb(null,file.originalname)
     }
})
const  upload = multer({
     storage:storageLocation
})
const regesterReport = async(req,res)=>{
     const newData = reportModel({
          file: req.file.filename
     })
     const saveRepot = await newData.save()
     if (saveRepot) {
          res.send(saveRepot)
     }
}

const getAlReports = async (req, res)=>{
    const allReports = await reportModel.find()
    if(allReports){
        res.send(allReports)
    }
}

module.exports = {
    regesterReport,
    upload,
    getAlReports
}