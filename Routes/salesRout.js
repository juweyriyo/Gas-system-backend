const express = require("express")

const router = express.Router()

const salesContoller = require("../Controller/salesContoller")


router.post("/register/sales", salesContoller.createSales)

module.exports = router