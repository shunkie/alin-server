const Router = require('koa-router')
const router = new Router()
const controller = require('../controller')

router.get('/api/v1/banner/:id', controller.banner.getBannerById)
router.get('/api/v1/banners', controller.banner.getBanners)

module.exports = router