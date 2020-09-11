const Discord = require('discord.js');
const tools = require('../tools');
//create a client, the bot itself
const client = new Discord.Client();

module.exports = {
    name: 'noroundping',
    aliases: ['nrp'],
    description: 'Does a client ping (not rounded)',
    usage: '',
    async execute(message, args) {
        try {
message.channel.send(tools.makeEmbed(`My NRP is: ${client.ping}`));
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
