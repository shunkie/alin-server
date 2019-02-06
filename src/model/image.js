const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema({
  url: String,
  description: String
})

module.exports = mongoose.model('Image', ImageSchema)