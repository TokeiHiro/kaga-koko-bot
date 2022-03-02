require('dotenv').config(); 

module.exports = {
    "TOKEN": process.env.DISCORD_TOKEN,
    "CLIENT_ID": process.env.CLIENT_ID, 
    "GUILD_ID": process.env.GUILD_ID,
    "PORT": process.env.PORT || 3000
}