const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);

module.exports = router;