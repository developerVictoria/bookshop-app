export type BookType = {
    _id?:string;
    title: string;
    author: string;
    publishYear: number;
    createdAt?:string;
    updatedAt?:string;
}

export interface IBooksArrayProps {
    items: BookType[]
}