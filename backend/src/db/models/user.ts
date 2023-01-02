import { Schema, model } from "mongoose"

//user interface
interface IUser {
    username: string,
    password: string
}

//schema
const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { toJSON: { virtuals: true } } )

//posts virtual
userSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "user"
})

//create model
//export
module.exports = model<IUser>("User", userSchema);