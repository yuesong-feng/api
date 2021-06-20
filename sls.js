const Koa = require("koa");

const app = new Koa();
const router = require("./router");


app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  await next();
});
app.use(router.allowedMethods()).use(router.routes());

// don't forget to export!
module.exports = app;
