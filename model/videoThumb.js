import mongoose from "mongoose";

const videoThumbnail=new mongoose.Schema({
    url:{
        type:String,
        require:true,
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }
});

const Videos=mongoose.model('videos',videoThumbnail)
export default Videos;