"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//roles enum
var roles;
(function (roles) {
    roles["admin"] = "admin";
    roles["user"] = "user";
})(roles || (roles = {}));
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
    },
    role: {
        type: String,
        default: roles.user,
        enum: Object.values(roles)
    },
    cart: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Post"
        }]
});
//create model
//export
module.exports = (0, mongoose_1.model)("User", userSchema);
