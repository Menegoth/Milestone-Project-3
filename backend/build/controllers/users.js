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
const { User, Post } = db;
//post to /users
//create new user
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //error if incorrect arguments
        if (!req.body.username || !req.body.password) {
            throw new Error("requires both username and password to create an account");
        }
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
        //duplicate username error
        if (String(err).includes("duplicate key error")) {
            err = "Error: duplicate username";
        }
        res.status(500).json(String(err));
    }
}));
//put /users/cart
//add a post to the cart
router.put("/cart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //error if incorrect arguments
        if (!req.body.userId || !req.body.postId) {
            throw new Error("requires both a post and user id");
        }
        //find a user and check if it exists
        //404 error if not found
        const user = yield User.findById(req.body.userId);
        if (!user) {
            res.status(404).json({
                error: "user not found"
            });
            return;
        }
        //check if post exists
        //404 error if not found
        const post = yield Post.findById(req.body.postId);
        if (!post) {
            res.status(404).json({
                error: "post not found"
            });
            return;
        }
        //populate cart field
        yield user.cart.push(post._id);
        yield user.save();
        res.status(200).json({
            message: "Post added to cart"
        });
    }
    catch (err) {
        //check if casterror
        if (String(err).includes("CastError")) {
            err = "Error: invalid ObjectId";
        }
        res.status(500).json(String(err));
    }
}));
//get /users/cart
//get all items in a user's cart
router.get("/:id/cart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //error if argument not passed
        if (!req.params.id) {
            throw new Error("requires a user ID");
        }
        const user = yield User.findById(req.params.id);
        //error 404 if user not found
        if (!user) {
            res.status(404).json({
                error: "user not found"
            });
            return;
        }
        //populate cart and return items in cart
        yield user.populate("cart");
        res.status(200).json(user.cart);
    }
    catch (err) {
        //check if casterror
        if (String(err).includes("CastError")) {
            err = "Error: invalid ObjectId";
        }
        res.status(500).json(String(err));
    }
}));
//get /users
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
