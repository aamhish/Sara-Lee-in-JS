var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "Mzk0NjY5NDE1NTYxNDI4OTkz.DSH3Yw.8JxgC5jGVTNzkcKBipZ6nWeDDrs",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});
