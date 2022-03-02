const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CLIENT_ID, GUILD_ID, TOKEN } = require('./config');

const commands = [
	new SlashCommandBuilder().setName('poke').setDescription('Poke Kaga, but why?'),
	new SlashCommandBuilder().setName('server').setDescription('Kaga will tell you server info.'),
	new SlashCommandBuilder().setName('user').setDescription('Kaga will tell you more about yourself.'),
    new SlashCommandBuilder().setName('kaga').setDescription('Kaga will send you picture of Kaga <3'),
	new SlashCommandBuilder().setName('pogr').setDescription('It is very pogr yes'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

// rest.put(Routes.applicationGuildCommands(CLIENT_ID, guildId2), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);

// rest.put(Routes.applicationGuildCommands(CLIENT_ID, guildId3), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);