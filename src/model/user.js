const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  openid: String,
  nickname: String,
  address: {
    name: String,
    mobile: String,
    province: String,
    city: String,
    country: String,
    detail: String
  },
  createdTime: {
    type: Date,
    default: Date.now
  },
  updatedTime: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)