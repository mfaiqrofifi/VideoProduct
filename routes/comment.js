import express from 'express'
import { createComment, getCommentById } from '../controller/comment.js'

const comment=express.Router();

comment.post('/',createComment);
comment.get('/:idVideo',getCommentById)

export default comment;