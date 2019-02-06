const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ctx.body = 'timeout'
      resolve()
    }, 1000)
  })
})

app.listen(8080)