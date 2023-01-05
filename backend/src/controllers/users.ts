const router = require("express").Router();
const db = require("../db/models");
import { Request, Response } from "express"
import bcrypt from "bcrypt";

const { User, Post } = db;

//post to /
//create new user
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        //get username and password from request body
        const password = req.body.password;
        const username = req.body.username;

        //create user and hash password
        const user = await User.create({
            username: username,
            role: "user",
            password: await bcrypt.hash(password, 10)
        })

        res.status(200).json(user)

    } catch (err: unknown) {
        console.log(err);
        res.status(500).json({
            message: "Duplicate Username"
        })
    }
})

//put /users/cart
//add a post to the cart
router.put("/cart", async (req: Request, res: Response): Promise<void> => {
    try {
        //check if passed both ids
        if (!req.body.userId || !req.body.postId) {
            throw new Error("requires both a post and user id")
        }
        
        //find a user and check if it exists
        const user = await User.findById(req.body.userId);
        if (!user) {
            throw new Error("user not found")
        }

        //check if post exists
        const post = await Post.findById(req.body.postId);
        if (!post) {
            throw new Error("post not found")
        } 

        //populate cart field
        user.cart.push(post._id);
        user.save();

        res.status(200).json({
            message: "Post added to cart"
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(String(err))
    }
})

//get /
//get a list of all users, testing only
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err: unknown) {
        res.status(500).json(err);
    }
})

//export
module.exports = router;