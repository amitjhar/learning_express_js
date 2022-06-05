const mongoose = require('mongoose')

const regSchema = mongoose.Schema ({
    username:String,
    password:String,
})

module.exports = mongoose.model('Reg',regSchema);