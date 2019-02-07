const { Image } = require('../model')

module.exports = {
  /**
   * GET /api/v1/images?description=
   */
  async getImages (ctx, next) {
    const description = ctx.query.description
    let res = []
    if (description) {
      res = Image.find({ description })
    } else {
      res = await Image.find({})
    }
    ctx.body = res
  }
}