import mongoose from "mongoose"
import { errorBadReq, errorInternalServer, errorNotFound, succes } from "../helper/helper.js"
import Comments from "../model/comment.js"

export async function createComment(req,res){
    try{
        const{userName,comment,videoId}=req.body
        if(!userName||!comment||!videoId){
            throw new Error("Bad Request")
        }
        const comments=await new Comments({
            userName,
            comment,
            videoId,
            created_at:new Date(),
            updated_at:new Date(),
        }).save()
        res.status(201).json(succes(comments,201))
    }catch(err){
        if(err.message==="Bad Request"){
            res.status(400).json(errorBadReq(err))
        }else{
            res.status(500).json(errorInternalServer(err))
        }
    }
}

export async function getCommentById(req,res){
    try{
        const idVideo=req.params.idVideo
        const idObjectVideos=new mongoose.Types.ObjectId(idVideo)
        const comment=await Comments.aggregate([{$match:{
            videoId:idObjectVideos
        }
        },{
            $lookup: {
                from: "videos", // collection name in db
                localField: "videoId",
                foreignField: "_id",
                as: "videos"
            }
        }])
        // console.log(comment)
        if(comment.length==0){
            throw new Error("Not found")
        }
        res.status(200).json(succes(comment,200))
    }catch(err){
        if(err.message==="Not found"){
            res.status(404).json(errorNotFound(err))
        }else{
            res.status(500).json(errorInternalServer(err))
        }
    }
}