const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CLIENT_ID, GUILD_IDS, TOKEN } = require('./config');

console.log('Deploying bot commands...');

const commands = [
	new SlashCommandBuilder().setName('poke').setDescription('Poke Kaga, but why?'),
	new SlashCommandBuilder().setName('server').setDescription('Kaga will tell you server info.'),
	new SlashCommandBuilder().setName('user').setDescription('Kaga will tell you more about yourself.'),
    new SlashCommandBuilder().setName('kaga').setDescription('Kaga will send you picture of Kaga <3'),
	new SlashCommandBuilder().setName('pogr').setDescription('It is very pogr yes'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

GUILD_IDS.forEach(guild_id => {

	rest.put(Routes.applicationGuildCommands(CLIENT_ID, guild_id), { body: commands })
		.then(() => console.log(`Successfully registered application commands on guild<${guild_id}>.`))
		.catch(console.error);

});
