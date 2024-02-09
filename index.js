import express from "express"
const app=express();

import http from "http"

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const expressServer=http.createServer(app)

const __dirname = dirname(fileURLToPath(import.meta.url));


import { Server } from "socket.io";



const io=new Server(expressServer)

io.on('connection',(Socket)=>{

    Socket.join('kithen-room');
    io.sockets.in('kithen-room').emit('cooking',"Fried Rice Cooking")


    Socket.join('bed-room');
    io.sockets.in('bed-room').emit('sleep',"I am sleeping")



})




app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})



expressServer.listen(3000,(req,res)=>{
    console.log("server is running on port 3000")
})