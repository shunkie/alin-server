const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const OrderSchema = new Schema({
  number: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
  totalPrice: Number,
  status: Number,
  items: String,
  address: String,
  prepayId: String
})

module.exports = mongoose.model('Order', OrderSchema)