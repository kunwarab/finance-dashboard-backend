const express = require("express");
const router = express.Router();

const { createUser, getUsers } = require("../controllers/userController");
const { authenticate } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create new user (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password, role]
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@test.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 example: ADMIN
 *     responses:
 *       201:
 *         description: User created
 *       403:
 *         description: Unauthorized
 */
router.post("/", authenticate, authorizeRoles("ADMIN"), createUser);
router.get("/", authenticate, authorizeRoles("ADMIN"), getUsers);

module.exports = router;