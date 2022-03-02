require('dotenv').config(); 

module.exports = {
    "TOKEN": process.env.DISCORD_TOKEN,
    "CLIENT_ID": process.env.CLIENT_ID, 
    "PORT": process.env.PORT || 3000,

    "GUILD_IDS": process.env.GUILD_IDS?.split(' ')
}