const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));//week 4


app.get("/", (req, res) => {
  res.send("Hyperlocal Service Marketplace API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));