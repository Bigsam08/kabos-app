/**
 * controllers to handle http request and logics for each routes
 */

const bcrypt = require("bcrypt"); //password hashing and auth
const User = require("../Models/user.Model");
const { generateToken } = require("../Utils/generate.token")
const crypto = require("crypto");
const { resetMailPassword } = require("../Services/mail.services");

const login = async (req, res) => {
    const { email, password } = req.body; // get the user inputs
    try {

        //validate inputs
        if (!email | !password) return res.status(400).json({ message: "Fields cannot be empty" })
        // check to see if email exists in db
        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "Invalid credentials" })
        const userPass = await bcrypt.compare(password, user.password)
        if (!userPass) return res.status(400).json({ message: "Invalid Credentials" })

        // if all checks out fine create a jwt and log user in
        generateToken(user._id, res);
        return res.status(200).json({ message: "Login successful" })
    } catch (error) {
        console.log("error in the login controller", error.message)
        return res.status(500).json({ message: "Internal Server error" })
    }
}

const register = async (req, res) => {
    const { fullName, email, phoneNumber, password } = req.body;
    try {
        if (!fullName || !email || !phoneNumber || !password) return res.status(400).json({ message: "All fields are required" })
        // check if email already exists
        const verifyUser = await User.findOne({ $or: [{ email }, { phoneNumber }] })
        if (verifyUser) {
            if (verifyUser.email === email) {
                return res.status(400).json({ message: "Email already exists" });
            }
            if (verifyUser.phoneNumber === phoneNumber) {
                return res.status(400).json({ message: "Phone number already exists" });
            }
        }
        // check if the password length is more than 8 characters
        if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters" })

        // if all checks out well hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // save the new user to db
        const newUser = new User({
            fullName,
            email,
            phoneNumber,
            password: hashPassword
        });
        await newUser.save();
        return res.status(201).json({ message: "Account created successfully!" })
    } catch (error) {
        console.log("error in the register controller", error.message);
        res.status(500).json({ message: "Internal Server Error!" })
    }
}

const logout = (req, res) => {
    try {
        // clear the token in the cookies
        // set token to empty and maxAge to zero
        res.cookie("jwtToken", "", { maxAge: 0 })
        return res.status(200).json({ message: "Logout successful" })
    } catch (error) {
        console.log("error in the logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }

}

const check = (req, res) => {
    try {
        // after passing the middleware return user data stored in req.user from the middleware
        res.status(200).json(req.user)

    } catch (error) {
        console.log("error in the check controller", error.message);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const forgetPassword = async (req, res) => {
    const { email } = req.body
    try {
        if (!email) {
            return res.status(400).json({ message: "Email is required!" })
        }
        // get user email and verify if it exist in db or not
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "Invalid Email!" })
        }
        // if the email exist generate a token to reset password with validity
        // generate a random token using crypto
        // set validity time 15 mins

        const resetToken = crypto.randomBytes(32).toString('hex');
        // hash the token
        const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
        user.resetToken = hashedToken;
        user.tokenExpiry = Date.now() + 15 * 60 * 1000 // mins seconds and milliseconds
        await user.save();

        // send the reset link to the user email
        await resetMailPassword(user.email, user.resetToken);
        res.status(200).json({ message: "Password reset link sent to your email" })

    } catch (error) {
        console.log("Error in my mail service", error.message)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const validateToken = async (req, res) => {

    const { token } = req.params;
    try {
        const user = await User.findOne({
          resetToken: token,
          tokenExpiry: { $gt: Date.now() }
        });
    
        if (!user) {
          return res.status(400).json({ message: 'Token expired or invalid' });
        }
    
        return res.status(200).json({ message: 'Token is valid' });
      } catch (error) {
        return res.status(500).json({ message: 'Server error' });
      }
}

const resetPassword = async (req, res) => {
    // get user new password 
    const { password } = req.body;
    const { token } = req.params;
    try {
        if (!password) return res.status(400).json({ message: "Password cannot be empty!" });
        if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters" });
        // if password passes all fields
        // find the user and save the password to db
        // hash new password

        const user = await User.findOne({
           resetToken : token,
           tokenExpiry : { $gt : Date.now()} 
        });
        const hashPassword = await bcrypt.hash(password, 10)
        // clean the token in the db and save the new password in the db
        user.password = hashPassword;
        user.resetToken = null;
        user.tokenExpiry = null;

        await user.save();
        return res.status(201).json({ message: "Password reset successful!" })

    } catch (error) {
        console.log("Error in the reset password controller", error.message);
        return res.status(500).json({ message: "Internal Server error try again later" })

    }

}




module.exports = { login, register, logout, check, forgetPassword, resetPassword, validateToken };

