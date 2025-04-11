const express = require("express");
const router = express.Router();
const { login, register, logout, check } = require("../Controllers/auth.Controllers");
const { authMiddleWare } = require("../MiddleWare/authMiddleWare");


router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/auth/logout", logout);
router.get("/auth/check", authMiddleWare, check);
module.exports = router;