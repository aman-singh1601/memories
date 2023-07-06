import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//importing the router
import postRouter from './routes/posts.js'
import userRoutes from './routes/users.js'

const app=express();
dotenv.config()



app.use(bodyParser.json({limit:'300mb' ,extended:true}));
app.use(bodyParser.urlencoded({limit:'300mb' ,extended:true}));
app.use(cors());

app.use('/posts',postRouter)
app.use('/user',userRoutes)

// const CONNECTION_URL='mongodb+srv://aman_1601:12aman34@cluster0.drnd5qe.mongodb.net/';
const PORT=process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>{
        app.listen(PORT,()=> console.log(`Server running on ${PORT}`))
    })
    .catch((error)=>{
        console.log(error.message)
    })