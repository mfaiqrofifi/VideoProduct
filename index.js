import express from 'express';
import dotenv, {parse} from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import videoTumb from './routes/videoTumb.js';

dotenv.config()
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/videos',videoTumb)
const port=process.env.PORT
console.log(port)
app.listen(port,()=>{
    console.log('Your server run in port 3000')
})
mongoose.connect(process.env.DATABASE_URL);
const db=mongoose.connection
db.on('error',()=>{
    console.log('Error Connection');
})
db.once('connected',()=>{
    console.log('concected')
})