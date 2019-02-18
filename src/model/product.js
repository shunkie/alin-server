const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ProductSchema = new Schema({
  name: String,
  image: {
    type: ObjectId,
    ref: 'Image'
  },
  spec: [{
    name: String,
    price: Number,
    stock: Number,
    image: {
      type: ObjectId,
      ref: 'Image'
    }
  }],
  createdTime: {
    type: Date,
    default: Date.now
  },
  updatedTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', ProductSchema)