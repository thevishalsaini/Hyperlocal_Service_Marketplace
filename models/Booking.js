const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  bookingDate: Date,
  address: String,

  // 🆕 New Field Added in Week 3
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Cancelled"],
    default: "Scheduled"
  }
});

//module.exports = mongoose.model("Booking", bookingSchema);
module.exports = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
