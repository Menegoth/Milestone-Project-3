const router = require("express").Router();
const db = require("../db/models");
import { jwt_secret } from "../config"
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

const { User } = db;

//post /
//login
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        //attempt to find user with given username
        const user = await User.findOne({
            username: req.body.username
        });

        //check password
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            console.log("test")
            res.status(404).json("Invalid username or password")
        } else {
            //create jwt and send token
            const result = jwt.sign({_id: user._id.toString()}, jwt_secret);
            res.status(200).json({user: user, token: result})
        }
    } catch (err: unknown) {
        res.status(500).json(err);
    }
});

//jwt interface
interface IToken {
    _id: string
}

// get /profile
// get profile with a JWT using "Authentication: Bearer ${token}" in the header
router.get("/profile", async (req: Request, res: Response): Promise<void> => {
    try {
        //get token from header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            res.status(404).json("Not found");
            return;
        }

        //get user id from token
        const decoded = jwt.verify(token, jwt_secret);
        const id = (decoded as IToken)._id

        //send user data back if matched
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(null);
    }
});

//export
module.exports = router;