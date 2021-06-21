const Koa = require("koa");

const app = new Koa();
const router = require("./router");
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*");
//   ctx.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
//   );
//   ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
//   await next();
// });
app.use(bodyparser()).use(cors()).use(router.allowedMethods()).use(router.routes());

// don't forget to export!
module.exports = app;

//dev mode
// app.listen(8080, () => console.log(`http://localhost:8080/add`));
