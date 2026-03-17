const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.model");

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;