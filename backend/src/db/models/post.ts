import { Schema, model } from "mongoose";

//post interface
interface IPost {
    title: string,
    user: string,
    content: string,
    price: number,
    image: string
}

//schema
const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
})

//export
module.exports = model<IPost>("Post", postSchema)