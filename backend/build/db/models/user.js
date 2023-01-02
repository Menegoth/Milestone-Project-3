"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//schema
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { toJSON: { virtuals: true } });
//posts virtual
userSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "user"
});
//create model
//export
module.exports = (0, mongoose_1.model)("User", userSchema);
