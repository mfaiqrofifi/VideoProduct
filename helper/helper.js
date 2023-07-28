const succes=(data,status)=>{
    return{
        message:"Success",
        status:status,
        data,
    }
}
const errorBadReq=(err)=>{
    return{
        message:err.message,
        status:400
    }
}
const errorInternalServer=(err)=>{
    return{
        message:err.message,
        status:500
    }
}
const errorNotFound=(err)=>{
    return{
        message:err.message,
        status:404
    }
}

export {succes,errorBadReq,errorInternalServer,errorNotFound};