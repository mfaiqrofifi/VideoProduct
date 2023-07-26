import express from 'express';
import { createVideos, getVideos } from '../controller/videos.js';

const videoTumb=express.Router()

videoTumb.post('/',createVideos);
videoTumb.get('/',getVideos);

export default videoTumb