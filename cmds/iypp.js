const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'iypp',
    aliases: ['ip'],
    description: 'finds the size of iyrs pp ```<:dankmemerflush:749826358401826926>',
    usage: '',
    nsfw: false,
    image: false,
    args: false,
    guildOnly: false,
    ownerOnly: false,
    async execute(message, args) {
        try {
message.channel.send(tools.makeEmbed("`.`"))
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
