const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'numberrand',
    aliases: ['num'],
    description: 'returns a random number from 1 to the number provided',
    usage: 'number',
    nsfw: false,
    image: false,
    args: true,
    guildOnly: false,
    ownerOnly: false,
    cooldown: 2,
    minArgs: 1,
    maxArgs: 1,
    async execute(message, args) {
        try {
message.channel.send(`<a:ComfySip:749200034846736394> ${message.author.username} I choosem \``, Math.floor(Math.random() * args) + 1, "`");
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
