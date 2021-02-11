const Discord = require('discord.js');
const tools = require('../tools');
const Client = new Discord.Client();
Client.on("message", msg => {
    if (msg.content === "hi") {
        msg.reply("hello")
    }
})