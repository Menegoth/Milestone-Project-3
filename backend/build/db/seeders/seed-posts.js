"use strict";
const db = require("../models");
const { default: mongoose } = require("mongoose");
//swap with userid
const userId = "63b33ccec20f539a4e118695";
db.Post.create([{
        title: "Test Title",
        user: userId,
        content: "Test Content",
        price: 12.99,
        image: "test"
    }])
    .then(() => {
    console.log("Successfuly seeded posts");
    mongoose.connection.close();
});
