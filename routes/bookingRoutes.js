const express = require("express");
const router = express.Router();

const {
  bookService,
  getUserBookings,
  updateBookingStatus, // 🆕 Imported
} = require("../controllers/bookingController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken(["user"]), bookService);
router.get("/", verifyToken(["user"]), getUserBookings);

// 🆕 Route Added in Week 3
router.put("/:id/status", verifyToken(["provider", "admin"]), updateBookingStatus);

module.exports = router;
