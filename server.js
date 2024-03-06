
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()


app.use(express.json())
app.use(cors())

//conect db
mongoose.connect("mongodb+srv://jeeylove922:sd7FyDh5oDokpA2u@cluster0.66xbiet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database has been connect successfully")
}).catch((error)=> console.log(error))


// import router
const employeRout = require("./Routes/employeeRoutes")
const adminRout = require("./Routes/adminRoutes")
const supplier = require("./Routes/supplierRout")
const reportRout = require("./Routes/reportRout")
const product = require("./Routes/productRout")
const customer = require("./Routes/customer")
const inventoryRout = require("./Routes/inventoryRout")
const ParchaseRout = require("./Routes/ParchaseRout")
app.use(employeRout)
app.use(adminRout)
app.use(supplier)
app.use(reportRout)
app.use(product)
app.use(customer)
app.use(inventoryRout)
app.use(ParchaseRout)

//custom documents for only Reports
app.use("/allrepot", express.static("reports"))

//port number web
app.listen(10000, () =>{
    console.log("server is runing port 5000");
})