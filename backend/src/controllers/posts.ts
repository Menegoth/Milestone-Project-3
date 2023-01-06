const router = require("express").Router();
const db = require("../db/models");
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config";

const { Post, User } = db;

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

//post /posts
//interface for token
interface IToken {
    _id: string
}


//create a post if user is an admin
router.post("/", async (req: Request, res: Response): Promise<void> => {
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
        const decoded = jwt.verify(req.body.jwt_token, jwt_secret);
        const id = (decoded as IToken)._id;

        //attempt to locate user using id
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send("Could not find user with given token");
            return;
        }

        //check if user has roles
        if (user.role === "admin") {
            const post = await Post.create({
                title: req.body.title,
                content: req.body.content,
                price: req.body.price,
                image: req.body.image
            });
            res.status(200).json(post);
            return;

        } else {
            throw new Error("Error: user does not have permission to create a new post")
        }


    } catch (err) {
        res.status(500).json(String(err));
    }
})

//export
module.exports = router;