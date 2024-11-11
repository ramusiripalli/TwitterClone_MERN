import express from 'express';
import dotenv from 'dotenv';
import connectMongoDb from './db/connectMongoDB.js'
const PORT = process.env.PORT || 3000;
import authRoutes from './routes/auth.routes.js';
const app = express();
dotenv.config();
console.log(process.env.MONGO_URL);
app.use('/api/auth',authRoutes);
app.get('/',(req,res)=> {
    res.send("Server is ready");
});




app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDb();
})