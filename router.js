const KoaRouter = require('koa-router')
const router = new KoaRouter()

const db = require("./db");
const { Article } = require("./model");
db.connect();

router
  .get(`/`, async (ctx) => {
    ctx.body = "Hello World!";
  })
  .get(`/hello`, async (ctx) => {
    ctx.body = "hello!";
  })
  .get(`/articles`, async (ctx) => {
    let msg = await Article.find();
    ctx.body = msg;
  })
  .get('/content/:title', async (ctx) => {
    let title = ctx.params.title;
    let msg = await Article.findOne({"title": title})
    ctx.body = msg
  })
  .get('/add', async ctx => {
    const thing = new Article()
    thing.title = "添加文章测试"
    thing.author = "yuesong-feng"
    thing.content = "this is a test for adding new content"
    await thing.save()
    ctx.body = "add success"
  })

module.exports = router