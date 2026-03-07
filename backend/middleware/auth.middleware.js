const Resource = require("../models/resource.model");
const User = require("../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = (req, res, next) => {
    // Get the token from the cookie
    const token = req.cookies?.token;
    
    // check token
    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Authentication required"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        // Attach user data to request
        req.user = decoded;
        next();
    } catch(err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports.isAdmin = async(req, res, next) => {
    if(req.user.role !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Access denied. Admin only."
        });
    }

    next();
}

const authorizeResourceAction = (action) => {
    return async (req, res, next) => {
        try {
            const { id } = req.params;

            // Get the current resource using the resource id
            const resource = await Resource.findById(id);

            // Check the resource ownership
            const isOwner = resource.createdBy?.equals(req.user?.id);

            // Role-based admin check
            const isAdmin = req.user?.role === 'admin';

            if(!isOwner && !isAdmin) {
                return res.status(403).json({
                    success: false,
                    message: `Not authorized to ${action} this resource`
                });
            }

            next();
        } catch(err) {
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }
} 

module.exports.isAuthorizedUpdate = authorizeResourceAction("update");
module.exports.isAuthorizedDelete = authorizeResourceAction("delete");