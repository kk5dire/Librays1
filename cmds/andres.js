const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'andres',
    aliases: ["andrew],
    description: 'who is andres?',
    usage: '-andres',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
message.channel.send("andrew gay");
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
