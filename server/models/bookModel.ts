import mongoose, { Schema, model } from 'mongoose';

//TODO: make separate file with custom types
export type BookType = {
    title: string;
    author: string;
    publishYear: number;
}

const bookSchema = new Schema<BookType>({
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

export const book = mongoose.model('Cat', bookSchema);

 