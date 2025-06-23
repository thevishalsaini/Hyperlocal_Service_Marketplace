const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/paymentController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/create-order", verifyToken(["user"]), createOrder);

module.exports = router;

//-----------------this code is of week 4