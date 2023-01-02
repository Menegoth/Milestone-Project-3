"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db = require("../models");
//seed users
//run first
db.User.create([
    {
        username: "Test 1",
        password: "test"
    },
    {
        username: "Test 2",
        password: "test"
    }
])
    .then(() => {
    console.log("Successfuly seeded users");
    mongoose_1.default.connection.close();
});
