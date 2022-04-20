const rpcGenerator = require("discordrpcgenerator");
module.exports = (client) => {


  let presence = rpcGenerator.createSpotifyRpc(client)

    .setDetails("Music Name") // Music Name

    .setState("Artist") // Artist

    .setAssetsLargeImage("spotify:")// Go to Readme.md
    .setAssetsLargeText("")

    .setAssetsSmallImage("spotify:")// Go to Readme.md
    .setAssetsSmallText("")


    .setStartTimestamp("" || Date.now()) // remember to use a number WITHOUT QUOTES and an Epoch value https://www.epochconverter.com

    .setEndTimestamp("" || Date.now())// remember to use a number WITHOUT QUOTES and an [Epoch value] (https://www.epochconverter.com)

    .setSyncId("")



  console.log(presence.toDiscord())


  client.user.setStatus("online"); //status account(online, idle and dnd.)


  client.user.setPresence(presence.toDiscord()).catch(console.error);

  console.log(("RPC enabled successfully"))
}
