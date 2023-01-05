import { Schema, model } from "mongoose"

//roles enum
enum roles {
    admin = "admin",
    user = "user"
}

//user interface
interface IUser {
    username: string,
    password: string,
    role: string
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
    },
    role: {
        type: String,
        default: roles.user,
        enum: Object.values(roles)
    }
}, { toJSON: { virtuals: true } } )

//posts virtual
userSchema.virtual("shopping cart", {
    ref: "Post",
    localField: "_id",
    foreignField: "user"
})

//create model
//export
module.exports = model<IUser>("User", userSchema);