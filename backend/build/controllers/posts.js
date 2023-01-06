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
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const db = require("../db/models");
const { Post } = db;
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
//export
module.exports = router;
