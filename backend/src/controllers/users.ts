const router = require("express").Router();
const db = require("../db/models");
import { Request, Response } from "express"
import bcrypt from "bcrypt";

const { User, Post } = db;

//post to /users
//create new user
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        //error if incorrect arguments
        if (!req.body.username || !req.body.password) {
            throw new Error("requires both username and password to create an account");
        }

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

    } catch (err) {
        //duplicate username error
        if (String(err).includes("duplicate key error")) {
            err = "Error: duplicate username"
        }

        res.status(500).json(String(err));
    }
});

//put /users/cart
//add a post to the cart
router.put("/cart", async (req: Request, res: Response): Promise<void> => {
    try {
        //error if incorrect arguments
        if (!req.body.userId || !req.body.postId) {
            throw new Error("requires both a post and user id")
        }
        
        //find a user and check if it exists
        //404 error if not found
        const user = await User.findById(req.body.userId);
        if (!user) {
            res.status(404).json({
                error: "user not found"
            });
            return;
        }

        //check if post exists
        //404 error if not found
        const post = await Post.findById(req.body.postId);
        if (!post) {
            res.status(404).json({
                error: "post not found"
            });
            return;
        } 

        //populate cart field
        await user.cart.push(post._id);
        await user.save();

        res.status(200).json({
            message: "Post added to cart"
        })

    } catch (err) {
        //check if casterror
        if (String(err).includes("CastError")) {
            err = "Error: invalid ObjectId"
        }
        res.status(500).json(String(err))
    }
});

//get /users/cart
//get all items in a user's cart
router.get("/cart", async (req: Request, res: Response): Promise<void> => {
    try {
        //error if argument not passed
        if (!req.body.id) {
            throw new Error("requires a user ID");
        }

        const user = await User.findById(req.body.id);
        //error 404 if user not found
        if (!user) {
            res.status(404).json({
                error: "user not found"
            });
            return;
        }

        //populate cart and return items in cart
        await user.populate("cart");
        res.status(200).json(user.cart);
        
    } catch(err) {
        //check if casterror
        if (String(err).includes("CastError")) {
            err = "Error: invalid ObjectId"
        }

        res.status(500).json(String(err));
    }
});

//get /users
//get a list of all users, testing only
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err: unknown) {
        res.status(500).json(err);
    }
});

//export
module.exports = router;