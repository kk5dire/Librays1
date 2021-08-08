const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'help',
    aliases: ['?'],
    description: 'Help',
    usage: '-help',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
        message.channel.send("https://kk5dire.github.io/Librays1/")
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
