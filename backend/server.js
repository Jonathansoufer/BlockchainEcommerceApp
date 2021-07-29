const koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");
const ethers = require("ethers");
const PaymentProcessor = require("../ecommerce-app/build/contracts/PaymentProcessor.json");
const { Payment } = require("./db.js");

const app = new koa();
const router = new Router();

router.get("/api/getPaymentId/:itemId", async (ctx) => {
  ctx.body = "hello world";
});

app.use(cors()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
