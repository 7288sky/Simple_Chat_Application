import express from "express"
const app=express();

import http from "http"

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const expressServer=http.createServer(app)

const __dirname = dirname(fileURLToPath(import.meta.url));


import { Server } from "socket.io";
import { Socket } from "dgram";

const io=new Server(expressServer)





io.on('connection',(Socket)=>{
    console.log("New user connected")

    Socket.on('chat',(msg)=>{
        console.log(msg)

        io.emit('chat_send',msg)

    })




})






app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})



expressServer.listen(3000,(req,res)=>{
    console.log("server is running on port 3000")
})