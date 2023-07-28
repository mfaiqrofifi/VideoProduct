import mongoose from "mongoose"
import { errorBadReq, errorInternalServer, errorNotFound, succes } from "../helper/helper.js"
import Products from "../model/product.js"

export async function createProduct(req,res){
    try{
        const {linkProduct,title,price,videoId}=req.body
        console.log(linkProduct,title,price,videoId)
        if(!linkProduct||!title||!price||!videoId){
            throw new Error("Bad Request")
        }
        const product=await new Products({
            link_product:linkProduct,
            title,
            price,
            videoId,
            created_at:new Date(),
            updated_at:new Date(),
        }).save()
        res.status(201).json(succes(product,201))
    }catch(err){
        if(err.message==="Bad Request"){
            res.status(400).json(errorBadReq(err))
        }else{
            res.status(500).json(errorInternalServer(err))
        }
    }
}

export async function getProductById(req,res){
    try{
        const idVideo=req.params.idVideo
        const idObjectVideos=new mongoose.Types.ObjectId(idVideo)
        const products=await Products.aggregate([{$match:{
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
        if(!products){
            throw new Error("Not found")
        }
        res.status(200).json(succes(products,200))
    }catch(err){
        if(err.message==="Not found"){
            res.status(404).json(errorNotFound(err))
        }else{
            res.status(500).json(errorInternalServer(err))
        }
    }
    
}