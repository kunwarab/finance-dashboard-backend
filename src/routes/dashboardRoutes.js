const express = require("express");
const router = express.Router();

const {
  getSummary,
  getCategoryBreakdown,
  getTrends
} = require("../controllers/dashboardController");

const { authenticate } = require("../middleware/authMiddleware");

// All authenticated users can view dashboard
/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get financial summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 income:
 *                   type: number
 *                   example: 5000
 *                 expense:
 *                   type: number
 *                   example: 2000
 *                 balance:
 *                   type: number
 *                   example: 3000
 */
router.get("/summary", authenticate, getSummary);
router.get("/category", authenticate, getCategoryBreakdown);
router.get("/trends", authenticate, getTrends);

module.exports = router;