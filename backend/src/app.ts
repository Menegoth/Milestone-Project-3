//dependencies
import express, { Request, Response } from "express";
import cors from "cors";

//config
import { port } from "./config"
const app = express();
app.use(cors());
app.use(express.json());

//GET / 
app.get("/", (req: Request, res: Response): void => {
    res.json({
        message: "/posts, /users, /authentication for functionality"
    });
});

//controllers
// /authentication
app.use("/authentication", require("./controllers/authentication"));

// /users
app.use("/users", require("./controllers/users"));

// /post
app.use("/posts", require("./controllers/posts"));

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})