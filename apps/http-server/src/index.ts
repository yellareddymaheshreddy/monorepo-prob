import express from "express";
import {client} from "@repo/db/client"

const app=express();

const port=3001;
app.get("/",async(req,res)=>{
    const resp=await client.user.create({
        data: {
            name: "tessadft",
            email: "sdfsdfsa"
        }})
    res.send("hello welcome to htp server"+JSON.stringify(resp));
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})