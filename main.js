///////////////////////////////////

// Youtube:
//https://www.youtube.com/channel/UC4zkPH1ticImcO4-fjM2pZA
//Replit:
//©DarkShdow

///////////////////////////////////

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');



const client = new discord.Client();
const keepAlive = require('./server.js');


const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/spotify`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.TOKEN);
