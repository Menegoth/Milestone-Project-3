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
const config_1 = require("../config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { User } = db;
//post /authentication
//login
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //attempt to find user with given username
        const user = yield User.findOne({
            username: req.body.username
        });
        //check password
        //return 404 if invalid username or password
        if (!user || !(yield bcrypt_1.default.compare(req.body.password, user.password))) {
            res.status(404).json("Invalid username or password");
        }
        else {
            //create jwt and send token
            const result = jsonwebtoken_1.default.sign({ _id: user._id.toString() }, config_1.jwt_secret);
            res.status(200).json({ user: user, token: result });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
// get /authentication/profile
// get profile with a JWT using "Authentication: Bearer ${token}" in the header
router.get("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        //get token from header
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (!token) {
            //error if token is empty
            throw new Error();
        }
        //get user id from token
        const decoded = jsonwebtoken_1.default.verify(token, config_1.jwt_secret);
        const id = decoded._id;
        //send user data back if matched
        //if no user was found, data will return null
        const user = yield User.findById(id);
        res.status(200).json(user);
    }
    catch (err) {
        //return no data if no token was found
        res.status(500).json(null);
    }
}));
//export
module.exports = router;
