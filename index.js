const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server =  http.createServer(app)
const io = socketio(server)

app.use('/',express.static(__dirname + '/public'))

const startUpServer = async() => {
    
    server.listen(3000, async() => {
        console.log("server started")
    })

   io.on('connection',(socket) => {

    // socket.on('from_client',() => {
    //     console.log("coming from client")
    // })

    socket.on('msg_send',(data) => {
        console.log(data);
        io.emit('msg_rcvd',data)
    })
    // setInterval(() => {
    //     socket.emit("from_server")
    // }, 2000);
   })

}


startUpServer()