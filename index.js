const express = require('express')

const app = express()

app.use('/',express.static(__dirname + '/public'))

const startUpServer = async() => {
    
    app.listen(3000, async() => {
        console.log("server started")
    })

}


startUpServer()