const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
