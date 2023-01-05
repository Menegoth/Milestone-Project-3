const router = require("express").Router();
const db = require("../db/models");
import { jwt_secret } from "../config"
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

const { User } = db;

//post /authentication
//login
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try {
        //attempt to find user with given username
        const user = await User.findOne({
            username: req.body.username
        });

        //check password
        //return 404 if invalid username or password
        if (!user || !await bcrypt.compare(req.body.password, user.password)) {
            res.status(404).json("Invalid username or password");
        } else {
            //create jwt and send token
            const result = jwt.sign({_id: user._id.toString()}, jwt_secret);
            res.status(200).json({user: user, token: result})
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//jwt interface
interface IToken {
    _id: string
}

// get /authentication/profile
// get profile with a JWT using "Authentication: Bearer ${token}" in the header
router.get("/profile", async (req: Request, res: Response): Promise<void> => {
    try {
        //get token from header
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            //error if token is empty
            throw new Error();
        }

        //get user id from token
        const decoded = jwt.verify(token, jwt_secret);
        const id = (decoded as IToken)._id

        //send user data back if matched
        //if no user was found, data will return null
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        //return no data if no token was found
        res.status(500).json(null);
    }
});

//export
module.exports = router;