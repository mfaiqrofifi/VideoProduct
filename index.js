import express from 'express';
import dotenv, {parse} from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import videoTumb from './routes/videoTumb.js';
import product from './routes/product.js';
import comment from './routes/comment.js';
import cors from 'cors';

dotenv.config()
const app=express()
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/products',product)
app.use('/videos',videoTumb)
app.use('/comment',comment)
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
//JsxLvhDP2vDb0YVz pw
//mfaiqrofifi