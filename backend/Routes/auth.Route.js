const express = require("express");
const router = express.Router();
const { login, register, logout, check, forgetPassword, resetPassword, validateToken } = require("../Controllers/auth.Controllers");
const { authMiddleWare } = require("../MiddleWare/authMiddleWare");
const tokenMiddlewareValidation = require("../MiddleWare/token.Middleware")



// authentication
router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/auth/logout", logout);
router.get("/auth/check", authMiddleWare, check);

//password reset
router.post('/forget-password', forgetPassword);
router.get('/validate-token/:token', validateToken);
router.post('/reset-password/:token', resetPassword);


module.exports = router;