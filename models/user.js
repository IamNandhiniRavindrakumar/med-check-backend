const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     email : string,
     password : string
})

module.exports = mongoose.model('user',userSchema)