import { default as mongoose } from "mongoose";
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
    console.log("Successfuly seeded admin");
    mongoose.connection.close();
})