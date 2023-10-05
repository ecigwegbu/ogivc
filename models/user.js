import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Error: Email exists!'],
        required: [true, 'Error: Email is missing!'],
    },
    username: {
        type: String,
        required: [true, 'Error: Username is missing!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Error: Username should be 8-20 unique, alphanumeric characters!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;