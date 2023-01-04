const router = require("express").Router();
const db = require("../db/models");
import { Request, Response } from "express"
import bcrypt from "bcrypt";

const { User } = db;

//post to /
//create new user
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        //get username and password from request body
        let password = req.body.password;
        let username = req.body.username;

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
            message: "Error"
        })
    }
})

//get /
//get a list of all users, testing only
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
})

//export
module.exports = router;