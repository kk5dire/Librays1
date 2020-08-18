const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'die',
    aliases: ['d'],
    description: 'kill the bot',
    usage: '-die',
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
