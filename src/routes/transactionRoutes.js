const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

const { authenticate } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Create (Admin only)
router.post("/", authenticate, authorizeRoles("ADMIN"), createTransaction);

// Read (All roles)
router.get("/", authenticate, getTransactions);

// Update (Admin only)
router.patch("/:id", authenticate, authorizeRoles("ADMIN"), updateTransaction);

// Delete (Admin only)
router.delete("/:id", authenticate, authorizeRoles("ADMIN"), deleteTransaction);

module.exports = router;