const express = require('express')
const server = express();

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("RPC IS READY")});
}
module.exports = keepAlive
