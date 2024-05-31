import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    mail:String,
    isAdmin: Boolean,
    password:String
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User