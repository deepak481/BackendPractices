import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            lowercase: true,
            required: true,
            unique: true
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            // We can also pass error message like => required: [true, "password is required"]
            required: true,
        }
    }, {timestamps: true}
);

// timestamps : true => by adding this - mongoose automatically adds 
// 'createdAt' and 'updatedAt' properties to model
// and also because of it adds two properties , 
// that's why it is timestamps not timestamp

export const User = mongoose.model("User", userSchema);

//model name will be saved as users (plural and lowercase) ***