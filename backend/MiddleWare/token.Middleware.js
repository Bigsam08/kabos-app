/**
 * Middleware to check if te token still exists or is validated in the db\
 * grant access to next function to reset password
 * or else block the user
 */
const User = require("../Models/user.Model")

const tokenMiddlewareValidation = async (req, res, next) => {
    const { token } = req.params;
    try {
        const user = await User.findOne({
            resetToken: token,
            tokenExpiry: { $gt: Date.now() }
        })
        if (!user) {
            return res.status(404).json({ message: "Token not found!" })
        }
        // token valid push to the next action
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: "Server Error Validating Token" })
    }
}

module.exports = tokenMiddlewareValidation;
