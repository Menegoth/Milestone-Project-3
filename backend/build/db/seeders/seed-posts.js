"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../models");
const mongoose_1 = __importDefault(require("mongoose"));
//swap with userid
const userId = "63b648697f310eb2367fdd08";
db.Post.create([{
        title: "Test Title",
        user: userId,
        content: "Test Content",
        price: 12.99,
        image: "test"
    }])
    .then(() => {
    console.log("Successfuly seeded posts");
    mongoose_1.default.connection.close();
});
