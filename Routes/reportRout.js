const express = require("express")
const reportController = require("../Controller/reportController")
const router = express.Router()
const { regesterReport, upload} = require("../Controller/reportController")
router.post("/Gas/report",upload.single("file"),regesterReport)
router.get("/allReprts",reportController.getAlReports)

module.exports =router