const express = require("express")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT || 4000

app.get('/' , (req,res)=>{
    res.send("PIZZA Server is in Progress")
})

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})