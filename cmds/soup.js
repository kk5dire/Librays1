const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'soup',
    aliases: [],
    description: 'tells the truth about soupyg',
    usage: '-soup',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    requires: '',
    cooldown: 0,
    minArgs: 0,
    maxArgs: 1,
    async execute(message, args) {
        try {
message.channel.send("you mean the simp"?);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
