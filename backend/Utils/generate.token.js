/**
 * generate a jwt
 */
const jwt = require("jsonwebtoken");


const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, { expiresIn : process.env.JWT_EXP_DAY})

    // send the token to cookies for storage
    res.cookie("jwtToken", token, {
        maxAge : 7 * 24 * 60 * 60 * 1000, // days hrs min sec milliseconds
        httpOnly : true,
        secure : false,
        sameSite : "lax",
        path : "/"
    })
    return token;

}

module.exports = { generateToken }