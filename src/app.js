const fs = require('fs')
const path = require('path')
const https = require('https')
const Koa = require('koa')
const mount = require('koa-mount')
const serve = require('koa-static')
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.mongodb.url, {
  authSource: config.mongodb.authSource,
  useNewUrlParser: true
})

const app = new Koa()
const router = require('./router')

app.use(mount('/image', serve(__dirname + '/public/image')))
app.use(router.routes())
app.use(router.allowedMethods())


const options = {
    key: fs.readFileSync(path.join(__dirname, 'cert/mine.key')),
    cert: fs.readFileSync(path.join(__dirname, 'cert/mine.pem'))
  }

https.createServer(options, app.callback()).listen(80, () => {
  console.log('server is running...')
})