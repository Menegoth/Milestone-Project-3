"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = require("../models");
//seed users as admin
db.User.create([
    {
        username: "Admin 1",
        password: "test",
        role: "admin"
    }
])
    .then(() => {
    console.log("Successfuly seeded users");
    mongoose_1.default.connection.close();
});
