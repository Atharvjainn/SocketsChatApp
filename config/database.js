const mongoose = require('mongoose')

const connect = async() => {
    await mongoose.connect('mongodb://localhost/chat')
}


module.exports = connect