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
  });

module.exports = router