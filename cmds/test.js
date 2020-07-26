const Discord = require('discord.js');
const fetch = require('node-fetch');
const tools = require('../tools');

module.exports = {
    name: 'emoji',
    aliases: ['emote'],
    description: 'Gets a random emoji from discordemoji.com',
    usage: '',
    nsfw: true,
    cooldown: 4,
    async execute(message, args) {
        message.channel.send('testing1234');
    },
};