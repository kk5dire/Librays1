const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'restart',
    aliases: ['r'],
    description: 'restart the bot',
    usage: '-restart',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: true,
    async execute(message, args) {
        try {
process.exit();
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
