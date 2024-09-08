const express = require("express")
const router = express.Router()


const { logIn, signUp } = require("../controller/Auth")


router.post('/login', logIn)
router.post('/signup', signUp)

module.exports = router