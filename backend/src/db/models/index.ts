const mongoose = require("mongoose");
import { mongo_uri } from "../../config"

mongoose.connect(String(mongo_uri),
    () => { console.log("Connected to mongo:", mongo_uri) }    
)

module.exports.User = require("./user")
module.exports.Post = require("./post")