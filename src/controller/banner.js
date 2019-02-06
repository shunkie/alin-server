const Banner = require('../model/banner')

const BannerController = {
  /**
   * GET api/v1/banner/:id
   */
  async getBannerById (ctx, next) {
    try {
      const res = await Banner.findById(ctx.params.id)
      ctx.status = 200
      ctx.body = res
    } catch (err) {
      ctx.status = 422
      ctx.body = {
        error: 'Validation Failed',
        detail: [{ message: 'id not exist'}]
      }
    }
  },

  /**
   * GET api/v1/banners
   */
  async getBanners (ctx, next) {
    const res = await Banner.find({})
    ctx.body = res
  }
}

module.exports = BannerController