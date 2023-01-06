"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//schema
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
});
//export
module.exports = (0, mongoose_1.model)("Post", postSchema);
