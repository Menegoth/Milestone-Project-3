//dependencies
import express, { Request, Response } from "express";
import cors from "cors";

//config
require("dotenv").config({path: ".env"});
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

//GET / 
app.get("/", (req: Request, res: Response): void => {
    res.json({
        message: "Testing"
    });
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})