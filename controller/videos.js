import { errorBadReq, errorInternalServer, succes } from "../helper/helper.js";
import Videos from "../model/videoThumb.js";

export async function createVideos(req,res){
    try{
        const {url}=req.body;
        // console.log(req.body)
        if (!url){
            throw new Error("Bad Request")
        }
        const video=await new Videos({
            url,
            created_at:new Date(),
            updated_at:new Date()
        }).save();
        res.status(201).json(succes(video,201));
    }catch(err){
        if(err.message==="Bad Request"){
            res.status(400).json(errorBadReq(err))
        }else{
            res.status(500).json(errorInternalServer(err))
        }
    }
}

export async function getVideos(req,res){
    try{
        const videos=await Videos.find()
        res.status(200).json(succes(videos,200))
    }catch(err){
        res.status(500).json(errorInternalServer(err))
    }
}