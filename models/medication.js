const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name:{type: String, required: true},
    dosage: {type: String, required: true},
    takenToday: {type:Boolean, default:false},
    date: {type:Date, default: Date.now}
})

module.exports = mongoose.model('medication', medicationSchema)