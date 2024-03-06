const express = require("express")
const costomerController = require("../Controller/costomerController")

const router = express.Router()

router.post("/create/customer", costomerController.createCustomer)
router.get("/allCustomers", costomerController.getAllCustomer)
router.get("/customer/single/:id", costomerController.singleDate)
router.put("/customer/update/:id", costomerController.update)
router.delete("/customer/delete/:id", costomerController.deleteCustomer)

module.exports = router

