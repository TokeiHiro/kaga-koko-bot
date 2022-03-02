// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const request = require('request');
const { Writable } = require('stream');
const fetch = require('node-fetch');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const image_api_endpoint = 'https://gregors-anime-api.herokuapp.com/url/kaga-kouko' || 'https://anime-api.hisoka17.repl.co/img/nsfw/boobs';
async function getImageReply() {
	try {
		// const embed = new MessageEmbed().setTitle('Kaga moment');
		const req = await fetch(image_api_endpoint);
		const { url } = await req.json();

		return { files: [url] }
	} catch {
		console.error('Couldn\'t get image to send - bruh');
		return 'Oopsie poopsie - swomting went woOoOong ~uwu~';
	}
}


// Reply to commands
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'poke') {
		await interaction.reply("I'm reporting you to the police.");
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'kaga') {
        await interaction.reply(await getImageReply());
    } else if (commandName === 'pogr') {
		await interaction.reply(`Kaga agree very pogr 🥳`)
	}
});

// Login to Discord with your client's token
client.login(token);