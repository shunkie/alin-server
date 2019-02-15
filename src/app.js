const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.mongodb.url, {
  authSource: config.mongodb.authSource,
  useNewUrlParser: true
})

const app = new Koa()
const router = require('./router')

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(8080, () => {
  console.log('server is running...')
})