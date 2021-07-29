const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecommerce-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const paymentSchema = mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
