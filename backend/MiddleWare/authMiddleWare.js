/**
 * middleware function to verify user before granting access to next action
 * checks if the user is authenticated or not.
 * check for jwt in the cookies and also verify it
 */

const jwt = require("jsonwebtoken");
const User = require("../Models/user.Model");

const authMiddleWare = async (req, res, next) => {
    try {
        const tokenCheck = req.cookies.jwtToken;
        if (!tokenCheck) return res.status(404).json({ message: "Unauthorized - Token not Found" });

        // if token exist in the cookies, verify it
        const decode = jwt.verify(tokenCheck, process.env.JWT_SECRET_KEY)
        if (!decode) return res.status(401).json({ message: "Unauthorized - Invalid Token" })

        // all verified, extract the userid and confirm/ fetch details from db
        const user = await User.findById(decode.userId).select("-password") // fetch the user data from the parsed cookie id, return all details except password
        if (!user) return res.status(404).json({ message : "User does not Exist" })
        // saves the user details in the req.user
        req.user = user;
        // all checks out pass to the next function
        next();
    } catch (error) {
        console.log("error in the auth middleWare", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { authMiddleWare }