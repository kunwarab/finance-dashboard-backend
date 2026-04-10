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
/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Create transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [amount, type]
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 500
 *               type:
 *                 type: string
 *                 example: INCOME
 *               category:
 *                 type: string
 *                 example: Salary
 *     responses:
 *       201:
 *         description: Transaction created
 */
router.post("/", authenticate, authorizeRoles("ADMIN"), createTransaction);

// Read (All roles)
/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         example: 10
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         example: INCOME
 *     responses:
 *       200:
 *         description: List of transactions
 */
router.get("/", authenticate, getTransactions);

// Update (Admin only)
/**
 * @swagger
 * /api/transactions/{id}:
 *   put:
 *     summary: Update transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Transaction updated
 */
router.patch("/:id", authenticate, authorizeRoles("ADMIN"), updateTransaction);

// Delete (Admin only)
/**
 * @swagger
 * /api/transactions/{id}:
 *   delete:
 *     summary: Delete transaction
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Transaction deleted
 */
router.delete("/:id", authenticate, authorizeRoles("ADMIN"), deleteTransaction);

module.exports = router;