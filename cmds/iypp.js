const Discord = require('discord.js');
const tools = require('../tools');

module.exports = {
    name: 'iypp `<:dankmemerflush:749826358401826926>',
    aliases: ['ip'],
    description: 'finds the size of iyrs pp',
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
