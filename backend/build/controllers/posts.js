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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const { Post, User } = db;
//get /posts/:id
//get a post by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //check if correct params
        if (!req.params.id) {
            throw new Error("requires id");
        }
        //attempt to find post with given id
        const post = yield Post.findById(req.params.id);
        //check if post found
        if (!post) {
            res.status(404).json({
                error: "post not found"
            });
            return;
        }
        res.status(200).json(post);
    }
    catch (err) {
        //check if casterror
        if (String(err).includes("CastError")) {
            err = "Error: invalid ObjectId";
        }
        res.status(500).json(String(err));
    }
}));
//get /
//get all posts
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //attempt to get all posts
        const posts = yield Post.find();
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
//create a post if user is an admin
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //check if request is correct
        if (!req.body.title || !req.body.content || !req.body.price || !req.body.image) {
            throw new Error("title, content, price and image required");
        }
        //check for jwt
        if (!req.body.jwt_token) {
            throw new Error("no token found");
        }
        //attempt to decode token 
        const decoded = jsonwebtoken_1.default.verify(req.body.jwt_token, config_1.jwt_secret);
        const id = decoded._id;
        //attempt to locate user using id
        const user = yield User.findById(id);
        if (!user) {
            res.status(404).send("Could not find user with given token");
            return;
        }
        //check if user has roles
        if (user.role === "admin") {
            const post = yield Post.create({
                title: req.body.title,
                content: req.body.content,
                price: req.body.price,
                image: req.body.image
            });
            res.status(200).json(post);
            return;
        }
        else {
            throw new Error("user does not have permission to create a new post");
        }
    }
    catch (err) {
        res.status(500).json(String(err));
    }
}));
//export
module.exports = router;
