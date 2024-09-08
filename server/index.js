const express = require("express")
const app = express()

app.use(express.json())

// environement file config
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT || 4000

// database connection
const database = require('./config/database')
database.connect()

// cookies use
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// const fileUpload = require('express-fileupload')
// app.use(
//     fileUpload({
// 		useTempFiles:true,
// 		tempFileDir:"/tmp",
// 	})
// )

// const cors = require('cors')
// app.use(
//     cors({
// 		origin:"*",
// 		credentials:true,
// 	})
// )

// Routes
const userRoutes = require('./routes/userRoutes')

app.use('/api/v1/auth' ,userRoutes)

app.get('/' , (req,res)=>{
    res.send("PIZZA Server is in Progress")
})

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})