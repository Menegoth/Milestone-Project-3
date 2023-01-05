const db = require("../models");
import { default as mongoose } from "mongoose";

//swap with userid
const userId = "63b648697f310eb2367fdd08";

db.Post.create([{
    title: "Test Title",
    user: userId,
    content: "Test Content",
    price: 12.99,
    image: "test"   
}])
.then (() => {
    console.log("Successfuly seeded posts");
    mongoose.connection.close(); 
});