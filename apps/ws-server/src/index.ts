import {WebSocketServer} from "ws";
import {client} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection',async function connection(ws) {
    const resp=await client.user.create({
        data: {
            name: "test",
            email: "sdfsa"
        }})

  ws.send('something'+JSON.stringify(resp));
});