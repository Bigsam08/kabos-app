/**
 * controllers to handle http request and logics for each routes
 */

const bcrypt = require("bcrypt"); //password hashing and auth
const User = require("../Models/user.Model");
const { generateToken } = require("../Utils/generate.token")

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

module.exports = { login, register, logout, check };

