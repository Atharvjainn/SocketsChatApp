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
    setInterval(() => {
        socket.emit("from_server")
    }, 2000);
   })

}


startUpServer()