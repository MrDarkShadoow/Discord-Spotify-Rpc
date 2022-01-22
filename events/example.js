

const rpcGenerator = require("discordrpcgenerator");
module.exports = (client) => {


  let presence = rpcGenerator.createSpotifyRpc(client)

    .setDetails("RPC Spotify") // Music Name

    .setState("DarkShaoow") // Artist

    .setAssetsLargeImage("spotify:ab67616d0000b273d6ca2480c92b6f62c4c3d59e")// Go to Readme.md


    .setStartTimestamp(Date.now()) // remember to use a number WITHOUT QUOTES and an Epoch value https://www.epochconverter.com

    .setEndTimestamp(Date.now()+1672531200000) // remember to use a number WITHOUT QUOTES and an [Epoch value] (https://www.epochconverter.com)



  console.log(presence.toDiscord())


  client.user.setStatus("dnd");


  client.user.setPresence(presence.toDiscord()).catch(console.error);

  console.log(("RPC enabled successfully"))
}

