import express from 'express';
import authRoutes from './routes/auth.routes.js';
const app = express();


app.use('/api/auth',authRoutes);
app.get('/',(req,res)=> {
    res.send("Server is ready");
});




app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})