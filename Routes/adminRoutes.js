const adminController = require("../Controller/adminController")

const express = require("express")

const router = express.Router()

router.post("/create/Users", adminController.regesterAdmin)
router.post("/create/login", adminController.loginAdmin)
router.get("/allUsers", adminController.getAllUsers)
router.delete("/user/delete/:id", adminController.deleteUser)

module.exports = router