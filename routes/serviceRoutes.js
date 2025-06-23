const express = require("express");
const router = express.Router();
const { createService, getAllServices } = require("../controllers/serviceController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken(["provider", "admin"]), createService);
router.get("/", getAllServices);

module.exports = router;
