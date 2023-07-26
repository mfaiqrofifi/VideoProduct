import mongoose from "mongoose";

const comment=new mongoose.Schema({
    userName:{
        type:String,
        require:true,
    },
    comment:{
        type:String,
        require:true,
    },
    videoId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Videos",
        require:true
    },
    created_at:{
        type:Date,
    },
    updated_at:{
        type:Date,
    }
})

const Comments=mongoose.model('comment',comment)
export default Comments;