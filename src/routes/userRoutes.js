const express = require("express");
const router = express.Router();

const { createUser, getUsers } = require("../controllers/userController");
const { authenticate } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.post("/", authenticate, authorizeRoles("ADMIN"), createUser);
router.get("/", authenticate, authorizeRoles("ADMIN"), getUsers);

module.exports = router;