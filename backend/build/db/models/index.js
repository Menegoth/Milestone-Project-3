"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../../config");
mongoose.connect(String(config_1.mongo_uri), () => { console.log("Connected to mongo:", config_1.mongo_uri); });
module.exports.User = require("./user");
module.exports.Post = require("./post");
