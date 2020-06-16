const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    time: {type: String},
    imageSrc: {type: String}
})

module.exports = model('Song', schema)