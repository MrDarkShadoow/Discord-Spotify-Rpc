const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("YOUR RPC IS READY")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("RPC IS READY")});
}
module.exports = keepAlive
