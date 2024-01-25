import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // ref should be name which we entered inside model as a name of model
        // i.e., mongoose.model("abc", subTodoSchema) => ref: "abc"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId    , // its also a type, used when we need
            // to give reference
            ref: "SubTodo"
        } 
    ] // Arrays of subtodos , it's professional way to directly write array
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);