const express = require("express")
const supplierController = require("../Controller/supplierController")

const router = express.Router()

router.post("/create/supplier", supplierController.createSupplier)
router.get("/allSuppliers", supplierController.getAllSuppliers)
router.get("/search/Supplier/:key", supplierController.searchSupplier)
router.get("/supplier/single/:id", supplierController.singleDate)
router.put("/supplier/update/:id", supplierController.update)
router.delete("/student/delete/:id", supplierController.deleteSupplier)


module.exports = router