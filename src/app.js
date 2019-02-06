const Koa = require('koa')
const mount = require('koa-mount')
const serve = require('koa-static')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true
})

const app = new Koa()
const router = require('./router')

app.use(mount('/image', serve(__dirname + '/public/image')))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(80, () => {
  console.log('server is running...')
})