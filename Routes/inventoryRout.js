const express = require("express")

const router = express.Router()

const inventoryController = require("../Controller/inventoryController")


router.post("/register/inventory", inventoryController.createInventory)
router.get("/allInventory", inventoryController.displayInventory)
router.put("/Inventory/update", inventoryController.update)

module.exports = router
