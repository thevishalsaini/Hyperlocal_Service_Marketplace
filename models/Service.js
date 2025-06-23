const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  price: Number,
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

//module.exports = mongoose.model("Service", serviceSchema);
module.exports = mongoose.models.Service || mongoose.model("Service", serviceSchema);

