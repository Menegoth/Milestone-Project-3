import * as dotenv from "dotenv"

dotenv.config({
    path: `${__dirname}/../.env`
});

export const port = Number(process.env.PORT);
export const mongo_uri = String(process.env.MONGO_URI);
export const jwt_secret = String(process.env.JWT_SECRET);