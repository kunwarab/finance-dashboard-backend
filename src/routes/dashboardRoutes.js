const express = require("express");
const router = express.Router();

const {
  getSummary,
  getCategoryBreakdown,
  getTrends
} = require("../controllers/dashboardController");

const { authenticate } = require("../middleware/authMiddleware");

// All authenticated users can view dashboard
router.get("/summary", authenticate, getSummary);
router.get("/category", authenticate, getCategoryBreakdown);
router.get("/trends", authenticate, getTrends);

module.exports = router;