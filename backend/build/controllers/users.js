"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const db = require("../db/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const { User } = db;
//post to /
//create new user
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get username and password from request body
        const password = req.body.password;
        const username = req.body.username;
        //create user and hash password
        const user = yield User.create({
            username: username,
            role: "user",
            password: yield bcrypt_1.default.hash(password, 10)
        });
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error"
        });
    }
}));
//get /
//get a list of all users, testing only
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//export
module.exports = router;
