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
    msg.reverse();
    ctx.body = msg;
  })
  .get('/content/:title', async (ctx) => {
    let title = ctx.params.title;
    let msg = await Article.findOne({"title": title})
    ctx.body = msg
  })
  .post('/add', async ctx => {
    const newArticle = new Article()
    newArticle.title = ctx.request.body.title
    newArticle.author = ctx.request.body.author
    newArticle.content = ctx.request.body.content
    await newArticle.save()
    ctx.body = "success"
  })

module.exports = router