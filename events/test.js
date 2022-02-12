const client = new Client();
const rpcGenerator = require("discordrpcgenerator");

let CLIENT_ID = "CLIENT_ID"
let IMAGE = "IMAGE_NAME"

module.exports = (client) => {






client.on("ready", () => {
    rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
    .then(image => {

    .setDetails("Music Name") // Music Name

    .setState("Artist") // Artist

    .setAssetsLargeImage(image.id)// Go to Readme.md
    .setAssetsLargeText("")


    .setStartTimestamp(Date.now()) // remember to use a number WITHOUT QUOTES and an Epoch value https://www.epochconverter.com

    .setEndTimestamp(Date.now()) // remember to use a number WITHOUT QUOTES and an [Epoch value] (https://www.epochconverter.com)



  console.log(presence.toDiscord())


  client.user.setStatus("online"); //status account(online, idle and dnd.)


  client.user.setPresence(presence.toDiscord()).catch(console.error);

  console.log(("RPC enabled successfully"))
}}
