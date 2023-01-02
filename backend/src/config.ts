import * as dotenv from "dotenv"

dotenv.config({
    path: `${__dirname}/../.env`
});

export const port = Number(process.env.API_PORT);
export const mongo_uri = String(process.env.MONGO_URI);