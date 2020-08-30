const express = require('express');
const cors = require('cors');
const app= express();
const cookieParser= require('cookie-parser')
require('./config/mongoose.config');
require('dotenv').config({path:__dirname + '/../.env'});
console.log(process.env.SECRET_KEY)

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// origin has to be from where client is making requests to server
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000' 
}));


require('./routes/Users.routes')(app);
// require('./routes/Message.routes')(app);
require('./routes/Inquiry.routes')(app);
const server = app.listen(8000, ()=>{
    console.log("Listening at port 8000")
})



const io = require("socket.io")(server);
let connectedClients=0;
const { Message } = require('./models/Message.model')

io.on("connection", socket =>{
    connectedClients++;
    console.log(socket.id)
    socket.broadcast.emit('new user has joined!'); 
    console.log("We have " + connectedClients + "connected!") 
    
    // This is an event listener
    socket.on('new message', payload => {
        console.log(payload)
        Message.create(payload)
        .then(msg=>{
            io.emit('updated messages', msg)
        })
        .catch(err=>console.log(err))
    })

    // This is an event listener
    socket.on('disconnect', ()=>{
        connectedClients--;
        console.log("We have " + connectedClients + "connected!")
    })
})





