const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const BannerSchema = new Schema({
  title: String,
  imageId: ObjectId,
  updatedTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Banner', BannerSchema)