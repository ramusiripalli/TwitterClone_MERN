import mongoose  from "mongoose";

const connectMongoDb = async() =>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected : ${conn.connection.host}`);
    }catch(error){
console.error(`Error connection to mongoDB: ${error.message}`);
process.exit(1);
    }
}


export default connectMongoDb;