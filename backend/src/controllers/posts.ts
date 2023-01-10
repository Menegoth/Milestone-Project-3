const router = require("express").Router();
const db = require("../db/models");
import { Request, Response } from "express";

const { Post } = db;

//get /posts/:id
//get a post by ID
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        //check if correct params
        if (!req.params.id) {
            throw new Error("requires id");
        }

        //attempt to find post with given id
        const post = await Post.findById(req.params.id);
        //check if post found
        if (!post) {
            res.status(404).json({
                error: "post not found"
            });
            return;
        }

        res.status(200).json(post);

    } catch (err) {
        //check if casterror
        if (String(err).includes("CastError")) {
            err = "Error: invalid ObjectId"
        }

        res.status(500).json(String(err));
    }
});

//get /
//get all posts
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        //attempt to get all posts
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//export
module.exports = router;