const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const BannerSchema = new Schema({
  title: String,
  image: {
    type: ObjectId,
    ref: 'Image'
  },
  updatedTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Banner', BannerSchema)