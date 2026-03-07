const mongoose = require("mongoose");
require("./server");
const User = require("./models/userModel");

async function createAdmin() {
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
    if(existingAdmin) {
        console.log("Admin already exists!");
        process.exit();
    }

    const admin = await User.create({
        username: "Admin",
        email: "admin@gmail.com",
        password: "AdminPass123",
        role: "admin"
    });

    console.log("Admin created", admin.email);
    process.exit();
}

createAdmin();