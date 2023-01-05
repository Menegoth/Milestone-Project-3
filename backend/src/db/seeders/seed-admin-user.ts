import { default as mongoose } from "mongoose";
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
    mongoose.connection.close();
})