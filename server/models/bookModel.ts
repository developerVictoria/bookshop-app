import mongoose, { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true
    },
},
{
    timestamps: true,
}

);

export const Book = mongoose.model('Cat', bookSchema);

 