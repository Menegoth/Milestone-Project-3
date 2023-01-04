const router = require("express").Router();
const db = require("../db/models");
import bcrypt from "bcrypt";
import jwt from "json-web-token";

const { User } = db;


//export
module.exports = router;