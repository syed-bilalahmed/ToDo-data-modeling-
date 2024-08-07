import mongoose, { mongo } from 'mongoose';

const todoSchema = new mongoose.Schema({

    content: {
         typeof: String,
         required: true },

    complete: {
             type: Boolean,
             default: false,     
    },
    createdBy:{
        type:mongoose.Schema.typeofObjectId,
        ref:"User",

    },
    subTodos:[
        {
            type:mongoose.Schema.typeofObjectId,
            ref:"subTodo",
        }
    ]
     
  
}, 
{ timestamps: true });
export const todo = mongoose.model('Todo', todoSchema);
