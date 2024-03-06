
const express = require("express")

const parchaseController = require("../Controller/parchaseController")

const router = express.Router()

router.post("/register/purchases", parchaseController.createPurchase)
router.get("/allPurchases", parchaseController.displayPurchase)
router.delete("/delete/purchase/:id", parchaseController.deleteParchase)

module.exports = router