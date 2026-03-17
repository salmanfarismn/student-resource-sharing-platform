const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    role: {
        type: String,
        default: "student"
    }
}, { timestamps: true });

userSchema.pre("save", async function() {
    // Only hash when the password is updated.
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);
module.exports = User;