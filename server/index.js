import express from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",AuthRoutes);
app.use("/api/message",MessageRoutes);

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on port ${process.env.PORT}`);
})

const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000'
    }
});

const onlineUsers = new Map();

io.on("connection",(socket)=>{
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId,socket.id);
    });
    socket.on("send-msg",async (data)=>{
        const {from,to,message}=data;
        console.log("data: ",data);
        const sendUserSocket = onlineUsers.get(to);
        console.log("sendUserSocket: ",sendUserSocket)
        if(sendUserSocket){
            socket.to(sendUserSocket).emit('msg-receieved',{
                senderId:from,
                receiverId:to,
                message
            })
        }
    })
})