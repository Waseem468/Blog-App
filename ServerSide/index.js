import express  from "express";
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/test",(req,res)=>{
    res.json("hello from backend")
})

app.listen(8080,()=>{
    console.log("connected to backend")
})