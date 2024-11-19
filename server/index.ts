import express, { Request, Response } from 'express';
import {PORT, mongoDBURL} from "./config"
import {BookType, book} from './models/bookModel'
import mongoose , {Document} from 'mongoose'
import bodyParser from 'body-parser';
import booksRoute from './routes/booksRoute'
import cors from 'cors'

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());
app.use(cors({
    origin:'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))

app.get('/', (req :Request, res: Response) =>{
    console.log(req);
    res.status(234).send('Basic MERN bookshop');
    return;
});

app.use('/books', booksRoute );

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


