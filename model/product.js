import mongoose from "mongoose";

const product=new mongoose.Schema({
    link_product:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
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

const Products=mongoose.model('product',product)
export default Products;