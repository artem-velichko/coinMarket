const { Schema, model } = require('mongoose')

const schema = new Schema({
    price: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        required: true
    },
})

module.exports = model('Price', schema)