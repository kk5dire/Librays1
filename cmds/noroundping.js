const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'noroundping',
    aliases: ['nrp'],
    description: 'Does a client ping (not rounded)',
    usage: '',
    async execute(message, args) {
        try {
message.channel.send(tools.makeEmbed(`My Exact ping is: ${client.ping}`));
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
