import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    ProfilePicture: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});


export const UserSchema = mongoose.model('user', User);

