import express, { Request, Response } from 'express';
import {PORT, mongoDBURL} from "./config"
import mongoose from 'mongoose'


const app = express();

app.get('/', (req :Request, res: Response) =>{
    console.log(req);
    res.status(234).send('Basic MERN bookshop');
    return;
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