const express = require("express")
const employeeController = require("../Controller/employeeController")

//create router
const router = express.Router()
router.post("/create/employee", employeeController.createEmployee)
router.get("/allemployees", employeeController.getAllEmployees)
router.get("/search/Employee/:key", employeeController.searchEmp)
router.get("/employee/single/:id", employeeController.singleDate)
router.put("/employee/update/:id", employeeController.update)


module.exports = router