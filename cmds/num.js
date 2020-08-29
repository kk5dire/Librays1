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
    cooldown: 5,
    minArgs: 1,
    maxArgs: 1,
    async execute(message, args) {
        try {
message.channel.send(tools.makeEmbed(Math.floor(Math.random() * args)));
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
