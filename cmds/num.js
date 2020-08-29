const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'numberrand',
    aliases: ['num'],
    description: 'returns a random number -1 of the number provided',
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
message.channel.send(tools.makeEmbed(`${message.author} I choose `, Math.floor(Math.random() * args), '<a:ComfySip:749200034846736394>'));
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
