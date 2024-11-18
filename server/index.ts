import express, { Request, Response } from 'express';
import {PORT, mongoDBURL} from "./config"
import {BookType, book} from './models/bookModel'
import mongoose , {Document} from 'mongoose'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req :Request, res: Response) =>{
    console.log(req);
    res.status(234).send('Basic MERN bookshop');
    return;
});


app.get('/books', async (req :Request, res: Response) =>{
    try{
         const bookList = await book.find({});
         res.status(200).json(bookList);
         return;
 
    }catch(err){
     console.log(err.message);
     res.status(500).send({message: err.message})
    }
 })

app.post('/newBook', async (req :Request, res: Response) =>{
   try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).send({message: 'Fields required : title, author and publishYear !'});
            return;
        }
        const newBook:BookType = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        const createdBook:Document = await book.create(newBook);
        res.status(201).send(createdBook);
        return;

   }catch(err){
    console.log(err.message);
    res.status(500).send({message: err.message})
   }
});

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to the db')
     app.listen(PORT, ()=>{
        console.log(`App runing at port: ${PORT}`)
    })
})
.catch((err)=>{
console.error(err);
})