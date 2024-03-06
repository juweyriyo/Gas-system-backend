const express = require("express")
const productControoler = require("../Controller/productControoler")

const router = express.Router()

router.post("/create/product", productControoler.createProduct)
router.get("/allProducts", productControoler.getAllProducts)
router.get("/product/single/:id", productControoler.singleDate)
router.put("/product/update/:id", productControoler.update)
router.delete("/product/delete/:id", productControoler.deleteProduct)


module.exports = router
