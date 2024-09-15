const express = require("express")
const router = express.Router()


const { getAllPizza } = require("../controller/Pizza")


router.get('/getallpizzas', getAllPizza)

module.exports = router