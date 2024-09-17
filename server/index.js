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

const fileUpload = require('express-fileupload')
app.use(
    fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

// cors helps to integrate the APIs with Frontend requests
const cors = require('cors')
app.use(
    cors({
		origin:"*",
		credentials:true,
	})
)

// Emitter 
const Emitter = require('events')
const eventEmitter = new Emitter()
app.set('eventEmitter', eventEmitter)

// Routes
const userRoutes = require('./routes/userRoutes')
const pizzaRoutes = require('./routes/pizzaRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.use('/api/v1/auth' ,userRoutes)
app.use('/api/v1/pizzas' ,pizzaRoutes)
app.use('/api/v1/order' ,orderRoutes)

app.get('/' , (req,res)=>{
    res.send("PIZZA Server is in Progress")
})

const server = app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

const io = require('socket.io')(server)
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('join', (room) => {
        socket.join(room);
        console.log(`Client joined room: ${room}`);
    });

    socket.on('updateOrderStatus', (order) => {
        // Emit to the specific room that the order belongs to
        io.to(`order_${order._id}`).emit('orderStatusUpdate', {
            id: order._id,
            status: order.status
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

eventEmitter.on('orderStatusUpdate', (data)=>{
	io.to(`order_${data.id}`).emit('orderStatusUpdate', data)
})