import mongoose from "mongoose";


const connectMongo = async ()=>{
    try{
    const {connection}=   await mongoose.connect(process.env.MONGO)

    if(connection.readyState==1){

        console.log('db connected')
    }
    }catch(err){
        return Promise.reject(err)
    }
}

export default connectMongo;