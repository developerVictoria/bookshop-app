export type BookType = {
    _id?:string;
    title: string;
    author: string;
    publishYear: number;
    createdAt?:string;
    updatedAt?:string;
}

export interface IBooksProps {
    item: BookType;
    onClose: () => void;
  }
export interface IBooksArrayProps {
    items: BookType[]
}

export interface IBookItemProps {
    item: BookType
}

