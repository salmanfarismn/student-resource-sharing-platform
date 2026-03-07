const User = require("../models/user.model");
const createSecretToken = require("../utils/secretToken");
const bcrypt = require("bcrypt");

module.exports.SignUp = async(req, res) => {
    try {
        const { email, password, username } = req.body;
        console.log(req.body)

        // Basic Validation
        if(!email || !password | !username) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if user already exists 
        const isUserExist = await User.findOne({ email });
        if(isUserExist) {
            return res.status(409).json({ 
                success: false,
                message: `${email} is already registered!` 
            });
        }

        // Hash password before storing
        // Already hashed the password in the usermodel
        // const hashedPassword = await bcrypt.hash(password, 12);

        // create user
        const user = await User.create({ username, email, password });

        // Generate token
        const token = createSecretToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days   
        });

        // send success response
        res.status(200).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch(err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
            // message: err.message
        });
    }
};

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


module.exports.Login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // validate input
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email/Password is required"
            });
        }

        // Find user
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password" 
            })
        }

        // compare password
        const isPasswordMatch  = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password" 
            });
        }

        // Generate token
        const token = createSecretToken(user);

        // set cookie
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // send response
        return res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports.Logout = async(req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true
        });

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
