const succes=(data,status)=>{
    return{
        message:"Succes",
        status:status,
        data,
    }
}
const errorBadReq=(err)=>{
    return{
        message:err.message,
        staus:400
    }
}
const errorInternalServer=(err)=>{
    return{
        message:err.message,
        staus:500
    }
}

export {succes,errorBadReq,errorInternalServer};