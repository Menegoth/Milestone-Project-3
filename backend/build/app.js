"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//dependencies
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//config
require("dotenv").config({ path: ".env" });
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//GET / 
app.get("/", (req, res) => {
    res.json({
        message: "Testing"
    });
});
//controllers
// /authentication
// app.use("/authentication", require("./controllers/authentication"));
// /users
app.use("/users", require("./controllers/users"));
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
